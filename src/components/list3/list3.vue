<template>
  <div>
    <div class="herdertop">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>天气管理</el-breadcrumb-item>
        <el-breadcrumb-item>天气管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="center">
      <div class="hander">天气管理</div>
      <div class="entirety">
        <div class="search">
          <!--  状态搜索信息 -->
          <div class="demo-input-suffix">
            城市搜索

            <el-input
              style=" width: 60%;"
              @change="isSeachCity"
              v-model="location"
              placeholder="输入城市"
              clearable
            ></el-input>
          </div>
        </div>
      </div>
      <!--  列表-->

      <div class="entirety">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="fxDate" label="预报日期">
            <template slot-scope="scope">
              <div>
                {{ scope.row.fxDate }}
              </div>
            </template>
          </el-table-column>

          <el-table-column prop="sunrise" label="日出时间">
            <template slot-scope="scope">
              <div>
                {{ scope.row.sunrise }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="sunset" label="日落时间">
            <template slot-scope="scope">
              <div>
                {{ scope.row.sunset }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="tempMax" label="最高温度">
            <template slot-scope="scope">
              <div>
                {{ scope.row.tempMax }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="tempMin" label="最低温度">
            <template slot-scope="scope">
              <div>
                {{ scope.row.tempMin }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="textNight" label="天气描述">
            <template slot-scope="scope">
              <div>
                {{ scope.row.textNight }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="windDirDay" label="白天风向">
            <template slot-scope="scope">
              <div>
                {{ scope.row.windDirDay }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="windScaleDay" label="白天风力等级">
            <template slot-scope="scope">
              <div>
                {{ scope.row.windScaleDay }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "北京",
      id: "101010100",
      dayly: [],

      tableData: [
        {
          fxDate: "2021-02-16",
          sunrise: "07:04",
          sunset: "17:53",
          moonrise: "09:31",
          moonset: "22:17",
          moonPhase: "峨眉月",
          tempMax: "2",
          tempMin: "-7",
          iconDay: "100",
          textDay: "晴",
          iconNight: "150",
          textNight: "晴",
          wind360Day: "0",
          windDirDay: "北风",
          windScaleDay: "3-4",
          windSpeedDay: "24",
          wind360Night: "0",
          windDirNight: "北风",
          windScaleNight: "3-4",
          windSpeedNight: "16",
          humidity: "16",
          precip: "0.0",
          pressure: "1025",
          vis: "25",
          cloud: "0",
          uvIndex: "3"
        },
        {
          fxDate: "2021-02-17",
          sunrise: "07:02",
          sunset: "17:54",
          moonrise: "09:54",
          moonset: "23:16",
          moonPhase: "峨眉月",
          tempMax: "4",
          tempMin: "-6",
          iconDay: "100",
          textDay: "晴",
          iconNight: "150",
          textNight: "晴",
          wind360Day: "315",
          windDirDay: "西北风",
          windScaleDay: "3-4",
          windSpeedDay: "16",
          wind360Night: "270",
          windDirNight: "西风",
          windScaleNight: "1-2",
          windSpeedNight: "3",
          humidity: "17",
          precip: "0.0",
          pressure: "1024",
          vis: "25",
          cloud: "0",
          uvIndex: "3"
        },
        {
          fxDate: "2021-02-18",
          sunrise: "07:01",
          sunset: "17:55",
          moonrise: "10:18",
          moonset: "00:00",
          moonPhase: "峨眉月",
          tempMax: "8",
          tempMin: "-5",
          iconDay: "100",
          textDay: "晴",
          iconNight: "150",
          textNight: "晴",
          wind360Day: "225",
          windDirDay: "西南风",
          windScaleDay: "1-2",
          windSpeedDay: "3",
          wind360Night: "225",
          windDirNight: "西南风",
          windScaleNight: "1-2",
          windSpeedNight: "3",
          humidity: "32",
          precip: "0.0",
          pressure: "1008",
          vis: "25",
          cloud: "0",
          uvIndex: "4"
        }
      ]
    };
  },
  activated() {
    this.DetailByPage();
  },
  methods: {
    isSeachCity(val) {
      this.location = val || "";
      this.DetailByPage();
    },

    DetailByPage() {
      this.$http({
        url: `/v2/city/lookup`,
        method: "GET",
        params: {
          location: this.location,
          key: "535627da54754fbd880efed958e8d831"
        }
      }).then(res => {
        console.log(`res`, res);
        console.log(`res.location[0].id,,,,`, res.location[0].id);

        if (res.code == 200) {
          this.id = res.location[0].id;
          this.getWeatherSeach(this.id);
        }
      });
    },

    getWeatherSeach(id) {
      this.$http({
        url: `https://devapi.qweather.com/v7/weather/3d`,
        method: "GET",
        params: {
          location: id,
          key: "535627da54754fbd880efed958e8d831"
        }
      }).then(res => {
        if (res.code == 200) {
          this.tableData = res.daily;
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
.hander {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 900;
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
