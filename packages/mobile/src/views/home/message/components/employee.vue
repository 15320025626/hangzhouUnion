<template>
  <div class="employee">
    <div class="bigtitlebox">
      <div class="bigtitle">
        职工代表
      </div>
      <div class="red">
        当前填报时间：2020.11.20~11.25
      </div>
    </div>
    <div class="littlebox">
      <div class="questionbox">
        <div class="question">
          <div class="littlebox">
            <div class="ll">（1）</div>
            <div class="ll red">*</div>
            <div class="ll">加班加点是否发生？</div>
          </div>
        </div>
        <div class="check">
          <van-radio-group v-model="radio1"
                           direction="horizontal">
            <van-radio name="1">有</van-radio>
            <van-radio name="2">无</van-radio>
          </van-radio-group>
        </div>

        <div class="vifshow"
             v-if="radio1==='1'">
          <van-field v-model="username"
                     label="加班加点发生次数:"
                     label-width=135 />
          <div>次</div>
          <div class="red"
               style="color:red">(每周最多五次)</div>
        </div>
      </div>
      <div class="questionbox">
        <!-- <div class="question">
          <div class="littlebox">
            <div class="ll">是否自愿加班</div>
            <div class="check check2">
              <van-radio-group v-model="radio2"
                               direction="horizontal">
                <van-radio name="1">有</van-radio>
                <van-radio name="2">无</van-radio>
              </van-radio-group>
            </div>
          </div>
        </div> -->
        <div class="vifshow">

          <div class="ll">是否自愿加班:</div>
          <div class="check2">
            <van-radio-group v-model="radio2"
                             direction="horizontal">
              <van-radio name="1">有</van-radio>
              <van-radio name="2">无</van-radio>
            </van-radio-group>
          </div>
        </div>

        <div class="vifshow"
             v-if="radio2==='2'">
          <van-field v-model="username"
                     name="用户名"
                     label="累计加班时间:"
                     label-width=135 />
          <div>小时</div>
        </div>
      </div>
      <div class="questionbox">
        <div class="question">
          <div class="littlebox">
            <div class="ll">（2）</div>
            <div class="ll red">*</div>
            <div class="ll">工伤事故是否发生过？</div>
          </div>
        </div>
        <div class="check">
          <van-radio-group v-model="radio3"
                           direction="horizontal">
            <van-radio name="1">有</van-radio>
            <van-radio name="2">无</van-radio>
          </van-radio-group>
        </div>

        <div class="vifshow"
             v-if="radio3==='1'">
          <van-field v-model="username"
                     label="工伤事故发生次数:"
                     label-width=135 />
          <div>次</div>
        </div>
      </div>

      <div class="questionbox">
        <div class="question">
          <div class="littlebox">
            <div class="ll">（3）</div>
            <div class="ll red">*</div>
            <div class="ll">劳动纠纷是否发生过？</div>
          </div>
        </div>
        <div class="check">
          <van-radio-group v-model="radio4"
                           direction="horizontal">
            <van-radio name="1">有</van-radio>
            <van-radio name="2">无</van-radio>
          </van-radio-group>
        </div>

        <div class="vifshow"
             v-if="radio4==='1'">
          <van-field v-model="username"
                     label="劳动纠纷发生次数:"
                     label-width=135 />
          <div>次</div>
        </div>
      </div>
      <div class="questionbox">
        <div class="question">
          <div class="littlebox">
            <div class="ll">（4）</div>
            <div class="ll red">*</div>
            <div class="ll">企业是否有员工离职？</div>
          </div>
        </div>
        <div class="check">
          <van-radio-group v-model="radio5"
                           direction="horizontal">
            <van-radio name="1">有</van-radio>
            <van-radio name="2">无</van-radio>
          </van-radio-group>
        </div>

      </div>

      <div class="questionbox">
        <div class="question">
          <div class="littlebox">
            <div class="ll">（5）</div>
            <div class="ll red">*</div>
            <div class="ll">对工会是否满意？</div>
          </div>
        </div>
        <div class="check">
          <van-radio-group v-model="radio5"
                           direction="horizontal">
            <van-radio name="1">满意</van-radio>
            <van-radio name="2">不满意</van-radio>
          </van-radio-group>
        </div>

        <div class="vifshow"
             v-if="radio5==='2'">
          <van-field v-model="username"
                     label="不满意的具体事项:"
                     label-width=135 />
          <!-- <div>次</div> -->
        </div>

        <div class="vifshow"
             v-if="radio4==='1'">
          <van-field v-model="username"
                     label="员工离职人数:"
                     label-width=100 />
          <div>人</div>
        </div>
      </div>

      <div class="questionbox">
        <div class="question">
          <div class="littlebox">
            <div class="ll">（6）</div>
            <div class="ll red"> </div>
            <div class="ll">其他情况</div>
          </div>
        </div>

        <div class="height95">
          <van-field v-model="value2"
                     placeholder="请输入其他情况，限50字"
                     name="validator" />
        </div>

        <!-- </div> -->
        <div class="uploader">
          <van-uploader v-model="fileList"
                        multiple
                        :max-count="3" />

        </div>

      </div>
      <div class="btnbox">
        <div class="btn">保存/修改当前内容</div>
        <div class="btn"
             style="width:80px">提交申请</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio1: "1",
      radio2: "1",
      radio3: "2",
      radio4: "1",
      radio5: "2",
      username: "",
      vif1data: [
        {

        }
      ],
      value1: "",
      value2: "",
      fileList: [],
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.employee {
  // padding-left: 15px;
  padding-top: 20px;
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
  .bigtitle3 {
    margin-top: 30px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 25px;
    .question {
      .littlebox {
        display: flex;
        // padding: 21px 0px 0px 0px;
        .red {
          color: #ff0000;
        }
      }
    }
  }
  .questionbox {
    padding-left: 19px;

    .height40 {
      ::v-deep .van-cell {
        height: 40px;
        line-height: 40px;
        margin: 12px 0px 0px 11px;
        width: 306px;
        border: 1px solid #e5e5e5;

        line-height: 21px;
        border-radius: 10px;
        text-indent: 15px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }
    .height95 {
      ::v-deep .van-cell {
        height: 95px;
        padding: 15px 0px 0px 15px;
        margin: 12px 0px 0px 11px;
        width: 306px;
        border: 1px solid #e5e5e5;

        line-height: 21px;
        border-radius: 10px;
        text-indent: 15px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }

    .uploader {
      margin: 12px 0px 0px 11px;
      .van-button--normal {
        padding: 0 9px;
        font-size: 26px;
      }
      .van-button--default {
        color: #e5e5e5;
        background-color: #fff;
        border: 1rem solid #e5e5e5;
        box-sizing: border-box;
      }
      .van-button {
        height: 51px;
        border-radius: 5px;
      }
      .text3 {
        padding: 1px 0px 0px 1px;
        width: 51px;

        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 17px;
      }
    }
    .question {
      .littlebox {
        display: flex;
        padding: 21px 0px 0px 0px;
        // height: 21px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 21px;
        // .ll {

        // }
        .red {
          color: #ff0000;
        }
      }
    }
    .vifshow {
      display: flex;
      padding: 15px 0px 0px 20px;
      font-size: 15px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 21px;
      ::v-deep input {
        border: none;
        border-bottom: 2rem #ccc solid;
        box-sizing: border-box;
        width: 60px;
      }
      ::v-deep .van-cell {
        width: 195px;
        border: 1px solid #e5e5e5;
        border: none;
        padding: 0px 0px;
        line-height: 21px;
        border-radius: 10px;

        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        .van-field__label {
          margin-right: 1px;
        }
      }
      .check2 {
        width: 150px;
        margin-left: 10px;
        // padding: 16px 0px 0px 20px;
        ::v-deep .van-radio-group--horizontal {
          display: flex;
          flex-wrap: nowrap;
        }
        ::v-deep .van-radio__icon--checked .van-icon {
          color: #fff;
          background-color: #e43428;
          border-color: #e43428;
        }
        ::v-deep .van-radio__label {
          font-size: 15px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 21px;
        }
        ::v-deep .van-radio__label {
          margin-right: 75px;
        }
      }
    }

    .flexwarp {
      display: flex;
      flex-wrap: wrap;
      padding-left: 20px;
      .vif1 {
        display: flex;
        padding-top: 15px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 21px;
        margin-right: 20px;
        ::v-deep input {
          border: none;
          border-bottom: 2rem #ccc solid;
          box-sizing: border-box;
          width: 45px;
        }
        ::v-deep .van-cell {
          width: 123px;
          border: 1px solid #e5e5e5;
          border: none;
          padding: 0px 0px;
          line-height: 21px;
          border-radius: 10px;

          font-size: 15px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          .van-field__label {
            margin-right: 1px;
          }
        }
      }
    }

    .check {
      padding: 16px 0px 0px 20px;
      ::v-deep .van-radio__icon--checked .van-icon {
        color: #fff;
        background-color: #e43428;
        border-color: #e43428;
      }
      ::v-deep .van-radio__label {
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 21px;
      }
      ::v-deep .van-radio__label {
        margin-right: 75px;
      }
    }
    .check2 {
      padding: 0px;
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