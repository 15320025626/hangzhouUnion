<template>
  <div class="message">
    <div class="topheader">

      <van-nav-bar title="信息员填报"
                   left-arrow
                   @click-left="onClickLeft" />
    </div>
    <div class="messageMedium">
      <van-tabs v-model="activeName">
        <van-tab title="当前填报"
                 name="a">
          <div class="iptbox">
            <div class="inputbox">
              <div class="nameflex">
                <div class="name margright8">(1)</div>
                <div class="name">姓名：</div>
              </div>

              <div class="input"><input type="text"
                       v-model="form.name"></div>
            </div>
            <div class="inputbox">
              <div class="nameflex">
                <div class="name margright8">(2)</div>
                <div class="name">电话：</div>
              </div>
              <div class="input"><input type="text"
                       v-model="form.phone"></div>
            </div>
            <div class="inputbox">
              <div class="nameflex">
                <div class="name margright8">(3)</div>
                <div class="name">部门：</div>
              </div>
              <div class="input"><input type="text"
                       v-model="form.department"></div>
            </div>
          </div>
          <div class="titlebox">
            <div class="bigtitlebox">
              <div class="bigtitle">
                3、社会人员
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
                    <div class="ll">你身边有无发生劳动纠纷？</div>
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
                             label="发生劳动纠纷次数:"
                             label-width=135 />
                  <div>件</div>
                </div>

                <div class="block">
                  <div class="padding">重要事件：</div>
                  <div class="padding">
                    <div>发生地点：</div>
                    <div><select v-model="selected"
                              @change="getSelected">
                        <option :value="item.index"
                                v-for="(item,index) in addressData"
                                :key="index">{{item.name}}</option>

                      </select></div>
                  </div>

                  <div class="padding">
                    <div>事件描述：</div>
                    <input type="text"
                           placeholder="请输入发生事件">
                  </div>

                </div>
                <!-- </div> -->
              </div>
              <div class="questionbox">
                <div class="question">
                  <div class="littlebox">
                    <div class="ll">（2）</div>
                    <div class="ll red">*</div>
                    <div class="ll">有无群体性纠纷？</div>
                  </div>
                </div>
                <div class="check">
                  <van-radio-group v-model="radio2"
                                   direction="horizontal">
                    <van-radio name="1">有</van-radio>
                    <van-radio name="2">无</van-radio>
                  </van-radio-group>
                </div>
                <div class="vifshow"
                     v-if="radio2==='1'">
                  <div>发生群体性纠纷次数:</div>
                  <input type="text">
                  <div>件</div>
                </div>
                <div class="block">
                  <div class="padding">重要事件：</div>
                  <div class="padding">
                    <div>发生地点：</div>
                    <div><select v-model="selected"
                              @change="getSelected">
                        <option :value="item.index"
                                v-for="(item,index) in addressData"
                                :key="index">{{item.name}}</option>

                      </select></div>
                  </div>

                  <div class="padding">
                    <div>事件描述：</div>
                    <input type="text"
                           placeholder="请输入发生事件">
                  </div>

                </div>
              </div>

              <div class="questionbox">
                <div class="question">
                  <div class="littlebox">
                    <div class="ll">（3）</div>
                    <div class="ll red">*</div>
                    <div class="ll">你身边发生劳动纠纷是否得到及时处理?</div>
                  </div>
                </div>
                <div class="check">
                  <van-radio-group v-model="radio3"
                                   direction="horizontal">
                    <van-radio name="1">有</van-radio>
                    <van-radio name="2">无</van-radio>
                  </van-radio-group>
                </div>

              </div>
              <div class="questionbox">
                <div class="question">
                  <div class="littlebox">
                    <div class="ll">（4）</div>
                    <div class="ll red">*</div>
                    <div class="ll">劳动关系问题主要集中在？</div>
                  </div>
                </div>
                <div class="flexwarp">
                  <!-- <div class="vif1">合同纠纷：<input type="text">件</div> -->
                  <!-- <div class="vif1"
                       v-for="(item,index) in vif1data"
                       :key="index">
                    <van-field v-model="item.namber"
                               :label="item.name"
                               label-width=75 />
                    <div>件</div>
                  </div> -->
                  <div class="vif1"
                       v-for="(item,index) in vif1data"
                       :key="index">{{item.name}}<input type="text"
                           v-model="item.namber">件</div>

                  <div class="vif1"
                       style="display:flex">
                    <div style="display:flex">
                      <div style="margin-right:30px">其</div>
                      <div> 他：</div>
                    </div> <input type="text">件
                  </div>
                </div>

              </div>
              <div class="questionbox">
                <div class="question">
                  <div class="littlebox">
                    <div class="ll">（5）</div>
                    <div class="ll red"> </div>
                    <div class="ll">你对劳动关系的意见或建议？</div>
                  </div>
                </div>

                <div class="height40">
                  <van-field v-model="value1"
                             name="validator" />
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
            <!-- 职工代表 -->
            <employee></employee>
            <!-- 工会代表 -->
            <workerLeader></workerLeader>
            <!-- 窗口工作人员 -->
            <windowPersonnel></windowPersonnel>
            <!-- <div class="bigtitle3">
              <div class="question">
                <div class="littlebox">
                  <div class="ll">4、</div>
                  <div class="ll red">* </div>
                  <div class="ll">窗口接待人员</div>
                </div>
              </div>
              <div class="background">
                <div class="toptitle">
                  工伤待遇
                </div>
                <div class="flexwarp">
                  <div class="vif1 flex">
                    <div class="flex1">
                      <div class="marginr30">咨</div>
                      <div> 询：</div>
                    </div> <input type="text">件
                  </div>
                  <div class="vif1 vif2"
                       v-for="(item,index) in vif1data2"
                       :key="index">
                    <van-field v-model="item.namber"
                               :label="item.name"
                               label-width=75 />
                    <div>件</div>
                  </div>
                  <div class="vif1"
                       style="margin-left:184px;padding-top:20px">合计：<input type="text">件</div>

                </div>
              </div>

              <div class="totle">
                <div class="vif1">总计：<input type="text">件</div>
              </div>
            </div> -->
            <div class="question">

            </div>
          </div>
          <!-- <div class="redbtn">提交申请</div> -->
        </van-tab>
        <van-tab title="填报记录"
                 name="b">
          <div class="messageMedium">
            <div class="reportbox"
                 v-for="(item,index) in reportdata"
                 :key="index">
              <div class="title1">{{item.title}}</div>
              <div class="title2">{{item.data}}</div>
              <div class="flexbox">
                <div class="title3">当前调研问卷的分值：</div>

                <div class="red">{{item.score}}</div>
                <div class="title3">分</div>
              </div>

            </div>
          </div>
        </van-tab>

      </van-tabs>
      <!-- <div class="iptbox"></div> -->

    </div>
  </div>
</template>

<script>
import employee from "../message/components/employee.vue"
import workerLeader from "../message/components/workerLeader.vue"
import windowPersonnel from "../message/components/windowPersonnel.vue"
export default {
  data () {
    return {
      activeName: 'a',
      form: {
        name: "",
        phone: "",
        department: "",
      },
      radio1: '1',
      radio2: '1',
      radio3: "1",
      value1: '',
      value2: '',
      vif1data: [
        {
          namber: "",
          name: "合同纠纷：",
        },
        {
          namber: "",
          name: "劳动报酬：",
        },
        {
          namber: "",
          name: "社会保险：",
        },
        {
          namber: "",
          name: "工作时间：",
        },
        {
          namber: "",
          name: "集体争议：",
        },
        // {
        //   namber: "",
        //   name: "其他：",
        // },
      ],
      vif1data2: [
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
      ],
      username: "",
      adresse: '',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker: false,
      addressData: [
        {
          index: 1,
          name: "上城区",
        },
        {
          index: 2,
          name: "拱墅区",
        },
        {
          index: 3,
          name: "滨江区",
        },
      ],
      selected: "",
      fileList: [],

      // 填报记录
      reportdata: [
        {
          title: "4类信息调查报告提交",
          data: "2020.10.20-10.27",
          score: "90",
        },
        {
          title: "4类信息调查报告提交",
          data: "2020.10.20-10.27",
          score: "90",
        },
      ]

    };
  },
  mounted () {
    this.selected = this.addressData[0].index
  },
  methods: {
    // afterRead (file) {
    //   // 此时可以自行将文件上传至服务器
    //   console.log(file);
    // },
    // 导航栏返回按钮
    onClickLeft () {
      // Toast('返回');
    },
    // 地点选择器
    onConfirm (adresse) {
      this.adresse = adresse;
      this.showPicker = false;
    },
    // 发生地点
    getSelected () {
      console.log(this.selected)
    }
  },
  components: {
    employee,
    workerLeader,
    windowPersonnel
  }

}
</script>

<style lang="scss" scoped>
.message {
  width: 100%;
  .topheader {
    width: 100%;
    // display: flex;
    position: relative;
    background-color: #e43428;
    height: 44px;
    width: 100%;
    .van-nav-bar {
      line-height: 44rem;

      background-color: #e43428;

      ::v-deep .van-nav-bar__content {
        height: 44rem;
        ::vp-deep .van-nav-bar {
          color: #fff;
        }
        .van-icon {
          color: #fff;
        }
        .van-nav-bar__arrow {
          // margin-left: 16rem;
          font-size: 23rem;
        }
        .van-nav-bar__title {
          max-width: 60%;
          margin: 0 auto;
          color: #fff;

          font-size: 19px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 26px;
        }
      }
    }
  }
  .messageMedium {
    // width: 100%;
    // // font-size: 14px;
    ::v-deep .van-tabs__wrap {
      height: 49px;
      border-bottom: 1px solid #f5f5f5;
      box-sizing: border-box;
      // padding-bottom: 20px;
    }
    ::v-deep .van-tab__text--ellipsis {
      font-size: 14px;
      color: #e43428;

      font-family: PingFangSC-Regular, PingFang SC;
    }
    ::v-deep .van-tabs__line {
      position: absolute;
      bottom: 15rem;
      left: 0;
      z-index: 1;
      width: 56rem;
      height: 2rem;
      background-color: #e43428;
      border-radius: 3rem;
    }
    .iptbox {
      padding: 10px 0px;
      .inputbox {
        display: flex;
        padding: 10px 24px 10px 12px;
        line-height: 40px;
        font-size: 15px;
        .nameflex {
          width: 82px;
          margin-right: 7px;
          display: flex;
          justify-content: center;
          .name {
            height: 21px;
            font-size: 15px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            // margin-right: 9px;
          }
          .margright8 {
            margin-right: 6px;
          }
        }

        input {
          width: 250px;
          line-height: 40px;
          border-radius: 20px;

          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          text-indent: 15px;
        }
      }
    }
    .titlebox {
      padding-left: 15px;
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

      // .bigtitle3 {
      //   margin-top: 30px;
      //   font-size: 18px;
      //   font-family: PingFangSC-Regular, PingFang SC;
      //   font-weight: 400;
      //   color: #333333;
      //   line-height: 25px;
      //   .question {
      //     .littlebox {
      //       display: flex;
      //       // padding: 21px 0px 0px 0px;
      //       .red {
      //         color: #ff0000;
      //       }
      //     }
      //   }
      //   // 有背景色的工伤待遇
      //   .background {
      //     margin-top: 15px;
      //     width: 345px;
      //     height: 175px;
      //     background: #f3f3f3;
      //     border-radius: 5px;
      //     .toptitle {
      //       padding-top: 15px;
      //       text-align: center;
      //       // width: 60px;
      //       font-size: 15px;
      //       font-family: PingFangSC-Regular, PingFang SC;
      //       font-weight: 400;
      //       color: #333333;
      //       line-height: 21px;
      //     }
      //     .flexwarp {
      //       display: flex;
      //       flex-wrap: wrap;
      //       padding-left: 20px;
      //       // padding-top: 15px;
      //       .vif1 {
      //         padding-top: 15px;
      //         font-size: 15px;
      //         font-family: PingFangSC-Regular, PingFang SC;
      //         font-weight: 400;
      //         color: #666666;
      //         line-height: 21px;
      //         margin-right: 20px;
      //         display: flex;
      //         ::v-deep .van-cell {
      //           width: 123rem;
      //           border: 1rem solid #e5e5e5;
      //           border: none;
      //           padding: 0 0;
      //           line-height: 21rem;
      //           border-radius: 10rem;
      //           font-size: 15rem;
      //           font-family: PingFangSC-Regular, PingFang SC;
      //           font-weight: 400;
      //           color: #999999;
      //           background-color: #f3f3f3;
      //           .van-field__label {
      //             background-color: #f3f3f3;
      //             margin-right: 0px;
      //           }
      //         }
      //         ::v-deep input {
      //           border: none;
      //           border-bottom: 2rem #ccc solid;
      //           box-sizing: border-box;
      //           width: 45px;
      //           background-color: #f3f3f3;
      //         }
      //       }
      //       .right {
      //         margin-right: 210px;
      //       }
      //       .flex {
      //         display: flex;
      //         .flex1 {
      //           display: flex;
      //           .marginr30 {
      //             margin-right: 30px;
      //           }
      //         }
      //       }
      //     }
      //   }
      //   .totle {
      //     padding-left: 198px;
      //     .vif1 {
      //       padding-top: 15px;
      //       font-size: 15px;
      //       font-family: PingFangSC-Regular, PingFang SC;
      //       font-weight: 400;
      //       color: #666666;
      //       line-height: 21px;
      //       margin-right: 20px;
      //       ::v-deep input {
      //         border: none;
      //         border-bottom: 2rem #ccc solid;
      //         box-sizing: border-box;
      //         width: 45px;
      //       }
      //     }
      //   }
      // }
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
        }
        .block {
          .padding {
            display: flex;
            justify-content: flex-start;
            padding-left: 20px;
            line-height: 20px;
            font-size: 14px;
            color: #646566;
            padding-bottom: 5px;
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
            // margin-left: 8rem;
            // color: #323233;
            // line-height: 20rem;
          }
          ::v-deep .van-radio__label {
            margin-right: 75px;
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
    // .redbtn {
    //   margin: 15px auto 19px;
    //   width: 200px;
    //   height: 47px;
    //   background: #e43428;
    //   border-radius: 24px;
    //   text-align: center;
    //   font-size: 15px;
    //   font-family: PingFangSC-Regular, PingFang SC;
    //   font-weight: 400;
    //   color: #ffffff;
    //   line-height: 47px;
    // }
    // 填报记录
    .reportbox {
      margin: 14px 15px;
      padding: 15px 15px;
      // width: 345px;
      // height: 109px;
      background: #ffffff;
      box-shadow: 0px 0px 4px 0px rgba(228, 52, 40, 0.13);
      border-radius: 10px;
      .title1 {
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 21px;
        margin-bottom: 5px;
      }
      .title2 {
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 18px;
        margin-bottom: 15px;
      }

      .flexbox {
        display: flex;
        .title3 {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 20px;
        }
        .red {
          width: 62px;
          // height: 56px;
          font-size: 40px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #e43428;
          // line-height: 56px;
          // line-height: 20px;
          margin: -28px 14px 0px 18px;
          margin-right: 14px;
        }
      }
    }
  }
}
</style>