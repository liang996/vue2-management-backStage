<template>
  <div>
    <div class="herdertop">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>列表6</el-breadcrumb-item>
        <el-breadcrumb-item>列表6</el-breadcrumb-item>
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
              placeholder="输入地名关键词"
              clearable
            ></el-input>
          </div>
        </div>
      </div>
      <!-- 列表列表-->

      <div class="entirety">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="province" label="省">
            <template slot-scope="scope">
              <div>
                {{ scope.row.province }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="市">
            <template slot-scope="scope">
              <div>
                {{ scope.row.city }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="area" label="区">
            <template slot-scope="scope">
              <div>
                {{ scope.row.area }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="地名关键词">
            <template slot-scope="scope">
              <div>
                {{ scope.row.name }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="详细地址">
            <template slot-scope="scope">
              <div>
                {{ scope.row.address }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="详细地址">
            <template slot-scope="scope">
              <div>
                {{ scope.row.address }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="lat" label="经度">
            <template slot-scope="scope">
              <div>
                {{ scope.row.location.lat }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="lng" label="纬度">
            <template slot-scope="scope">
              <div>
                {{ scope.row.location.lng }}
              </div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="isMapInfo(scope.row.uid, scope.row.location)"
                type="text"
                size="small"
                style="color: #fd5e8e"
              >
                查看地图点
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
export default {
  data() {
    return {
      tableData: [],

      name: "上海",
      pageIndex: 1,
      pageSize: 20,
      total: 0
    };
  },
  activated() {
    this.DetailByPage();
  },
  methods: {
    isSeachName(val) {
      this.DetailByPage();
    },

    //根据id删除
    isMapInfo(uuid, data) {
      console.log(uuid, ...data);
      this.$router.push({
        path: "/map",
        query: {
          ...data
        }
      });
    },
    //分页获取优惠券模板列表接口调用
    DetailByPage() {
      this.$http({
        url: `/place/place/v2/search`,
        method: "GET",
        params: {
          query: this.name,
          region: "全国",
          output: "json",
          ak: "1sTGWsKucqpIauM2Y0fUaceGWM6unUkU"
        }
      }).then(res => {
        console.log("res,,", res);
        if (res.message == "ok") {
          this.tableData = res.results;
          this.total = parseInt(res.results.length);
        } else {
          this.$message.error("查询错误");
          return false;
        }
      });
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
