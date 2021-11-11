<template>
  <div>
    <div class="herdertop">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>列表2</el-breadcrumb-item>
        <el-breadcrumb-item>列表2</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="center">
      <div class="hander">列表2</div>
      <div class="entirety">
        <div class="search">
          <!--  搜索信息 -->

          <div class="demo-input-suffix">
            搜索

            <el-input
              style=" width: 60%;"
              @change="isSeachName"
              v-model="name"
              placeholder="输入名称"
              clearable
            ></el-input>
          </div>

          <div class="demo-input-suffix">
            <el-upload
              style="position:absolute;"
              action="/上传文件的接口"
              :on-change="onChange"
              :auto-upload="false"
              :show-file-list="false"
              accept=".xls, .xlsx"
            >
              <el-button type="warning" size="medium" icon="el-icon-folder-add"
                >导入</el-button
              >
            </el-upload>
            <el-button size="medium" type="primary" style="margin-left:130px;">
              <download-excel
                :data="tableData"
                :fields="json_fields"
                name="用户账号表.xls"
              >
                导出</download-excel
              >
            </el-button>
            <el-button
              type="primary"
              size="medium"
              @click="copy(name)"
              class="copy tag"
              >复制搜索框名称</el-button
            >
          </div>
        </div>
      </div>
      <!-- 列表列表-->

      <div class="entirety">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="url" label="图片">
            <template slot-scope="scope">
              <el-image
                style="width: 70px; height: 30px"
                :src="scope.row.url"
                :preview-src-list="[scope.row.url]"
                :fit="'contain'"
              ></el-image>
            </template>
          </el-table-column>

          <el-table-column prop="name" label="姓名">
            <template slot-scope="scope">
              <div>
                {{ scope.row.name }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="sex" label="性别">
            <template slot-scope="scope">
              <div>
                {{ scope.row.sex }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="phone" label="电话">
            <template slot-scope="scope">
              <div>
                {{ scope.row.phone }}
              </div>
            </template>
          </el-table-column>

          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="isDel(scope.row.id)"
                type="text"
                size="small"
                style="color: #fd5e8e"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="page"
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="pageIndex"
          :page-size="pageSize"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from "clipboard";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      json_fields: {
        //导出Excel表格的表头设置
        编号: "id",
        姓名: "name",
        性别: "sex",
        电话: "phone"
      },
      url: "",
      name: "",
      pageIndex: 1,
      pageSize: 20,
      total: 0,
      id: "",
      pageIndex: 1,
      msg: "",
      total: 0,
      tableData: [],
      name: ""
    };
  },
  activated() {
    this.DetailByPage();
  },
  methods: {
    //----------以下为导入Excel数据功能--------------
    // 文件选择回调
    onChange(file, fileList) {
      console.log("fileList,,,,,,,,,,,", fileList);
      this.fileData = file; // 保存当前选择文件
      this.readExcel(); // 调用读取数据的方法
    },
    // 读取数据
    readExcel(e) {
      let that = this;
      const files = that.fileData;
      if (!files) {
        //如果没有文件
        return false;
      } else if (!/.(xls|xlsx)$/.test(files.name.toLowerCase())) {
        this.$message.error("上传格式不正确，请上传xls或者xlsx格式");
        return false;
      }
      const fileReader = new FileReader();
      fileReader.onload = ev => {
        try {
          const data = ev.target.result;
          // console.log(data)
          const workbook = this.XLSX.read(data, {
            type: "binary"
          });
          console.log(workbook.SheetNames);
          if (workbook.SheetNames.length >= 1) {
            this.$message({
              message: "导入数据表格成功",
              showClose: true,
              type: "success"
            });
          }
          const wsname = workbook.SheetNames[0]; //取第一张表
          const ws = this.XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容

          that.outputs = []; //清空接收数据
          that.studentlist = []; //清空接收数据
          var data2 = [];
          ws.map((value, index, arry) => {
            console.log("value,,,,,,", value);
            console.log("index,,,,,,", index);
            console.log("index,,,,,,", ws[index]["姓名"]);
            // 键名为绑定 el 表格的关键字，值则是 ws[i][对应表头名]

            data2.push({
              id: uuidv4(),
              url: "https://wangchujiang.com/dev-site/icons/coffeescript.svg",

              name: ws[index]["姓名"],
              sex: ws[index]["性别"],
              phone: ws[index]["电话"]
            });
          });
          console.log("data2,,,,,,", data2);

          this.tableData = this.tableData.concat(data2);
          console.log("data2,,,,,,", data2);
          console.log("that.tableData,,,,,,", this.tableData);

          this.$refs.upload.value = "";
        } catch (e) {
          return false;
        }
      };
      // 如果为原生 input 则应是 files[0]
      fileReader.readAsBinaryString(files.raw);
    },

    copy(data) {
      // 员工编号复制
      let clipboard = new Clipboard(".tag", {
        text: function() {
          return data;
        }
      });
      clipboard.on("success", e => {
        this.$message({
          message: "复制成功",
          showClose: true,
          type: "success"
        });
        // 释放内存
        clipboard.destroy();
      });
    },

    isSeachName(val) {
      if (val !== "") {
        this.tableData = this.tableData.filter(i => i.name == val);
        this.total = parseInt(this.tableData.length);
      } else {
        this.DetailByPage();
      }
    },

    //根据id删除
    isDel(id) {
      this.$confirm("是否删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.tableData = this.tableData.filter(i => i.id != id);
      });
    },
    //分页获取优惠券模板列表接口调用
    DetailByPage() {
      const arr = [
        {
          id: 1,
          name: "张三",
          sex: "男",
          phone: "15788909908",
          url:
            "https://himg.bdimg.com/sys/portrait/item/public.1.f1519725.tx1F2O9yP-hyQtgWMyBOig.jpg"
        },
        {
          id: 2,
          name: "李四",
          sex: "女",
          phone: "13783909908",
          url: "https://wangchujiang.com/dev-site/icons/node-logo.svg"
        },
        {
          id: 3,
          name: "张洁",
          sex: "女",
          phone: "13788909918",
          url: "https://wangchujiang.com/dev-site/icons/coffeescript.svg"
        },
        {
          id: 4,
          name: "李清",
          sex: "男",
          phone: "18788909908",
          url: "https://wangchujiang.com/dev-site/icons/cyclejs.svg"
        }
      ];
      this.tableData = arr;
      this.total = parseInt(arr.length);
    },

    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;

      this.DetailByPage();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;

      this.DetailByPage();
    }
  }
};
</script>
<style scoped lang="scss">
/deep/ .el-upload {
  border: 1px dashed #999999;
}
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 128px;
  text-align: center;
}
.avatar {
  width: 108px;
  height: 108px;
  display: block;
}
.hander {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 900;
}
.news {
  margin-left: 4%;
}
.entirety {
  width: 95%;
  margin: 10px;
  border: 7px solid #fafafa;
  border-radius: 10px;
  .basic {
    font-size: 18px;
    font-weight: 900;
    margin-top: 2%;
    margin-bottom: 1%;

    margin-left: 1%;
  }
}
.news {
  margin-left: 4%;
}
.overall {
  width: 100%;
  height: auto;
  display: flex;

  justify-content: space-between;
  margin-top: 3%;
  .left {
    width: 20%;
    height: auto;
  }
  .right {
    width: 80%;
    height: auto;
  }
}
.demo-input-suffix {
  margin-left: 1%;
}
.select {
  width: 65%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .dialog-footer,
  .choice {
    margin-left: 2%;
  }
}
.herdertop {
  height: 8vh;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}
.topImg {
  margin-right: 20px;
}
/deep/ .itemClass .el-form-item__content {
  width: 350px;
}
.userSearch {
  display: flex;
  /deep/ .el-input__inner {
    box-sizing: border-box;
    height: 40px;
    border-radius: 0;
    width: 132px;
    border: 1px solid #dcdfe6;
  }
  /deep/ .el-icon-arrow-up:before {
    position: relative;
    top: -4px;
  }
  /deep/ .el-button {
    height: 40px;
    border-radius: 0;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    position: relative;
    .el-icon-search {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  /deep/ .el-input--suffix .el-input__inner {
    border-right: none;
  }
  /deep/ .el-input--suffix .el-input__inner {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
}
.selects {
  width: 55%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .dialog-footer,
  .choice {
    margin-left: 2%;
  }
}

/deep/ .but {
  background: #fd7097;
  color: #fff;
  margin-bottom: 1%;
}
</style>
