<template>
  <div class="windowPersonnel">
    <div class="bigtitle3">
      <div class="question">
        <div class="littlebox">
          <div class="bigtitlebox">
            <div class="bigtitle">窗口接待人员</div>
            <div class="red"> 当前填报时间：2020.11.20~11.25</div>
          </div>

        </div>
      </div>
      <div class="background"
           v-for="(item,index) in backgroundata"
           :key="index">
        <div class="toptitle">
          {{item.title}}
        </div>
        <div class="flexwarp">
          <div class="vif1 flex">
            <div class="flex1">
              <div class="marginr30">咨</div>
              <div> 询：</div>
            </div> <input type="text">件
          </div>

          <div class="vif1"
               v-for="(item1,index1) in item.children"
               :key="index1">{{item1.name}}<input type="text"
                   v-model="item1.namber">件</div>
          <div class="vif1 flexcenter">合计：<input type="text">件</div>

        </div>
      </div>

      <div class="totle">
        <div class="vif1">总计：<input type="text">件</div>
      </div>
      <div class="background">

        <div class="toptitle titleflex">
          <div class="red"
               style="color：red">*</div>
          <div>法律援助统计</div>
        </div>
        <div class="flexwarp">

          <div class="vif1">本周受理：<input type="text">件</div>
          <div class="vif1">本周结案：<input type="text">件</div>
        </div>
      </div>

    </div>
    <div class="btnbox">
      <div class="btn">保存/修改当前内容</div>
      <div class="btn"
           style="width:80px">提交申请</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backgroundata: [
        {
          title: "工伤待遇",
          children: [
            {
              namber: "",
              name: "协商调解：",
            },
            {
              namber: "",
              name: "法律援助：",
            },
            {
              namber: "",
              name: "工作时间：",
            },
          ]
        },
        {
          title: "合同纠纷",
          children: [
            {
              namber: "",
              name: "协商调解：",
            },
            {
              namber: "",
              name: "法律援助：",
            },
            {
              namber: "",
              name: "工作时间：",
            },
          ]
        },
        {
          title: "劳动报酬",
          children: [
            {
              namber: "",
              name: "协商调解：",
            },
            {
              namber: "",
              name: "法律援助：",
            },
            {
              namber: "",
              name: "工作时间：",
            },
          ]
        },
        {
          title: "社会保险",
          children: [
            {
              namber: "",
              name: "协商调解：",
            },
            {
              namber: "",
              name: "法律援助：",
            },
            {
              namber: "",
              name: "工作时间：",
            },
          ]
        },
        {
          title: "工作时间",
          children: [
            {
              namber: "",
              name: "协商调解：",
            },
            {
              namber: "",
              name: "法律援助：",
            },
            {
              namber: "",
              name: "工作时间：",
            },
          ]
        },
        {
          title: "集体争议",
          children: [
            {
              namber: "",
              name: "协商调解：",
            },
            {
              namber: "",
              name: "法律援助：",
            },
            {
              namber: "",
              name: "工作时间：",
            },
          ]
        },
        {
          title: "福利待遇",
          children: [
            {
              namber: "",
              name: "协商调解：",
            },
            {
              namber: "",
              name: "法律援助：",
            },
            {
              namber: "",
              name: "工作时间：",
            },
          ]
        },

      ]

    }
  }
}
</script>

<style lang="scss" scoped>
.windowPersonnel {
  .bigtitle3 {
    margin-top: 30px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 25px;
    .question {
      .littlebox {
        // display: flex;
        // padding: 21px 0px 0px 0px;
        // .red {
        //   color: #ff0000;
        // }
        .bigtitlebox {
          display: flex;
          padding-right: 15px;
          justify-content: space-between;
          .bigtitle {
            // width: 137px;
            // height: 25px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: 25px;
            // padding: 0px 15px;
          }
          .red {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #e43428;
            line-height: 25px;
          }
        }
      }
    }
    // 有背景色的工伤待遇
    .background {
      margin-top: 15px;
      width: 345px;
      // height: 175px;
      padding-bottom: 26px;
      background: #f3f3f3;
      border-radius: 5px;
      .toptitle {
        padding-top: 15px;
        text-align: center;
        // width: 60px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 21px;
      }
      .titleflex {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0px auto;
        .red {
          color: #e43428;
        }
      }
      .flexwarp {
        display: flex;
        flex-wrap: wrap;
        padding-left: 20px;
        // padding-top: 15px;
        .vif1 {
          padding-top: 15px;
          font-size: 15px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 21px;
          margin-right: 20px;
          display: flex;
          ::v-deep input {
            border: none;
            border-bottom: 2rem #ccc solid;
            box-sizing: border-box;
            width: 45px;
            background-color: #f3f3f3;
          }
        }
        .flexcenter {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-left: -35px;
          padding-top: 20px;
        }
        .right {
          margin-right: 210px;
        }
        .flex {
          display: flex;
          .flex1 {
            display: flex;
            .marginr30 {
              margin-right: 30px;
            }
          }
        }
      }
    }
    .totle {
      padding-left: 198px;
      .vif1 {
        padding-top: 15px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 21px;
        margin-right: 20px;
        margin: 0px auto;
        ::v-deep input {
          border: none;
          border-bottom: 2rem #ccc solid;
          box-sizing: border-box;
          width: 45px;
        }
      }
    }
  }
  .btnbox {
    display: flex;
    justify-content: space-between;
    padding: 10px 38px 20px 19px;
    .btn {
      padding: 10px 10px;
      text-align: center;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      background-color: rgb(17, 143, 201);
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>