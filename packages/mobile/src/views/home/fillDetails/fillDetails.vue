<template>
  <div class="details">
    <div class="topheader">

      <van-nav-bar title="填报详情"
                   left-arrow
                   @click-left="onClickLeft" />
    </div>
    <div class="contentbox">
      <div class="scoreright">
        <div class="score">分值：</div>
        <div class="bigred">{{score}}</div>
        <div class="score">分</div>
      </div>

      <div class="form">
        <div class="listbox"
             v-for="(item,index) in listData"
             :key="index">
          <div class="label">{{item.label}}</div>
          <div class="content">{{item.content}}</div>
        </div>
        <!-- <div class="imgbox">
        <div class="img"
             v-for="(item,index) in imgdata"
             :key="index"><img :src="item.img"
               alt=""></div>
      </div> -->
      </div>

      <div class="titlebox">
        <div class="bigtitle">
          3、社会从业人员
        </div>
        <div class="littlebox">
          <div class="questionbox"
               v-for="(item,index) in contentdata"
               :key="index">
            <div class="question">
              <div class="littlebox">
                <div class="ll">{{item.list}}</div>
                <div class="ll red">{{item.icon}}</div>
                <div class="ll">{{item.question}}</div>
              </div>
            </div>

            <div class="contentdetail littlebox"
                 v-for="(item1,index1) in item.children"
                 :key="index1">
              <span class="hint word">填写的内容：</span>
              <span class="yesOrNo word"
                    style="margin-right:10px">{{item1.radio}}</span>
              <span class="flexstart"
                    v-for="(item2,index2) in item1.children"
                    :key="index2">

                <!-- <span v-if="item1.ifimg">
                  <span class="imgflex">
                    <span class="img">
                      <img :src="item2.img"
                           alt="">
                    </span>
                  </span>

                </span> -->
                <span> <span class="word">/{{item2.title}}</span>
                  <span class="word"
                        style="margin-right:10px">{{item2.number}}</span></span>
              </span>

            </div>

          </div>

          <div class="questionbox">
            <div class="question">
              <div class="littlebox">
                <div class="ll">（5）</div>
                <div class="ll">其他情况</div>
              </div>
            </div>
            <div class="contentdetail littlebox">
              <span class="hint word">填写的内容：</span>
              <span class="yesOrNo word"
                    style="margin-right:10px">如下图</span>
              <div class="flexstart">

                <span>
                  <span class="imgflex">
                    <span class="img">
                      <img src="../../../../public/img/more@2x.png"
                           alt="">
                    </span>
                    <span class="img">
                      <img src="../../../../public/img/more@2x.png"
                           alt="">
                    </span>
                    <span class="img">
                      <img src="../../../../public/img/more@2x.png"
                           alt="">
                    </span>
                  </span>

                </span>

              </div>

            </div>
          </div>

        </div>

      </div>
      <div class="titlebox">
        <div class="bigtitle">
          <div class="littlebox">
            <div class="ll">4、</div>
            <div class="ll red">*</div>
            <div class="ll">窗口接待人员</div>
          </div>
        </div>
        <div class="littlebox">
          <div class="questionbox"
               v-for="(item,index) in contentdata2"
               :key="index">
            <div class="question">
              <div class="littlebox">
                <div class="ll">{{item.list}}</div>
                <div class="ll red">{{item.icon}}</div>
                <div class="ll">{{item.question}}</div>
              </div>
            </div>

            <div class="contentdetail littlebox"
                 v-for="(item1,index1) in item.children"
                 :key="index1">
              <span class="hint word">填写的内容：</span>
              <span class="yesOrNo word"
                    style="margin-right:10px">{{item1.radio}}</span>
              <span class="flexstart"
                    v-for="(item2,index2) in item1.children"
                    :key="index2">

                <span> <span class="word">/{{item2.title}}</span>
                  <span class="word"
                        style="margin-right:10px">{{item2.number}}</span></span>
              </span>

            </div>

          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      score: 90,
      listData: [
        {
          label: "（1）姓名:",
          content: "王小毛",
        },
        {
          label: "（2）电话:",
          content: "199999999999",
        },
        {
          label: "（3）部门:",
          content: "设计部",
        },
      ],
      contentdata: [
        {
          list: "（1）",
          icon: "*",
          question: "你身边有无发生劳动纠纷？",
          children: [
            {
              radio: "有",
              children: [
                {
                  title: "劳动纠纷发生次数：",
                  number: "10件",
                },
              ]
            }
          ]
        },
        {
          list: "（2）",
          icon: "*",
          question: "有无群体纠纷？",
          children: [
            {
              radio: "有",
              children: [
                {
                  title: "发生群体纠纷的次数：",
                  number: "10件",
                },
              ]
            }
          ]
        },
        {
          list: "（3）",
          icon: "*",
          question: "劳动关系主要集中在",
          children: [
            {
              radio: "",
              children: [
                {
                  title: "合同纠纷",
                  number: "2件",
                },
                {
                  title: "劳动报酬",
                  number: "2件",
                },
                {
                  title: "社会保险",
                  number: "2件",
                },
                {
                  title: "工作时间",
                  number: "2件",
                },
                {
                  title: "集体争议",
                  number: "2件",
                },
                {
                  title: "其他",
                  number: "2件",
                },
              ]
            }
          ]
        },
        {
          list: "（4）",
          icon: "",
          question: "你对劳动关系的意见和建议",
          children: [
            {
              radio: "未填写",


            }
          ]
        },

      ],
      contentdata2: [
        {
          list: "（1）",
          icon: "",
          question: "工伤待遇",
          children: [
            {
              radio: "",
              children: [
                {
                  title: "咨询：",
                  number: "10件",
                },
                {
                  title: "协调调解",
                  number: "10件",
                },
                {
                  title: "法律援助：",
                  number: "10件",
                },
                {
                  title: "其他：",
                  number: "30件",
                },


              ]
            }
          ]
        },
        {
          list: "",
          icon: "",
          question: "总计",
          children: [
            {
              radio: "",
              children: [
                {
                  title: "本周受理：",
                  number: "10件",
                },
                {
                  title: "本周结案：",
                  number: "100件",
                },
              ]
            }
          ]
        },

      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.details {
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
  .contentbox {
    padding: 9px 15px 0px;
    .scoreright {
      height: 56px;
      display: flex;
      justify-content: flex-end;
      .score {
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 56px;
      }
      .bigred {
        font-size: 40px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #e43428;
        line-height: 56px;
        margin: 0px 10px;
      }
    }
    .form {
      padding: 15px 0px;
      .listbox {
        display: flex;
        margin-bottom: 15px;
        .label {
          width: 82px;

          height: 21px;
          font-size: 15px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 21px;
          // overflow: hidden;
          margin-right: 5px;
        }

        .content {
          // text-align: left;
          width: 260px;
          font-size: 15px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 21px;
        }
      }
    }
    .titlebox {
      padding-left: 15px;
      .bigtitle {
        // width: 137px;
        // height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 25px;
        // padding: 0px 15px;
        .littlebox {
          display: flex;
          padding: 21px 0px 0px 0px;
          // height: 21px;
          font-size: 18rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 25rem;

          .red {
            color: #ff0000;
          }
        }
      }

      .questionbox {
        padding-left: 19px;

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

            .red {
              color: #ff0000;
            }
          }
        }
        .contentdetail {
          // display: flex;
          // flex-wrap: wrap;
          // align-content: flex-start;
          padding: 10px 0px 0px;
          .word {
            padding-top: 10px;
            font-size: 15px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 21px;
          }
          .imgflex {
            display: flex;

            .img {
              height: 68px;
              width: 90px;
              margin-right: 18px;
              img {
                height: 68px;
                width: 90px;
              }
            }
          }

          // .flexstart {
          //   // display: flex;
          // }
        }
      }
    }
  }
}
</style>