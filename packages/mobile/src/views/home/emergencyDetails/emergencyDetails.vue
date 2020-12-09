<template>
  <div class="details">
    <div class="topheader">

      <van-nav-bar title="突发事件详情"
                   left-arrow
                   @click-left="onClickLeft" />
    </div>
    <div class="form">
      <div class="listbox"
           v-for="(item,index) in listData"
           :key="index">
        <div class="label">{{item.label}}</div>
        <div class="content">{{item.content}}</div>
      </div>
      <div class="imgbox">
        <div class="img"
             v-for="(item,index) in imgdata"
             :key="index"><img :src="item.img"
               alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData: [
        {
          label: "发生地点:",
          content: "上城区",
        },
        {
          label: "发生时间:",
          content: "2020.10.23",
        },
        {
          label: "详情描述:",
          content: "农名工讨薪农名工讨薪农名工讨薪农名工讨薪农名工讨薪农名工讨薪农名工讨薪农名工讨薪农名工讨薪",
        },
      ],
      imgdata: [
        {
          img: "../../../../img/more@2x.png",
        },
        {
          img: "../../../../img/more@2x.png",
        },
      ]
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
  .form {
    padding: 15px 15px;
    .listbox {
      display: flex;
      margin-bottom: 15px;
      .label {
        width: 75px;
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
    .imgbox {
      display: flex;
      padding: 0px 15px 15px 75px;
      .img {
        width: 68px;
        height: 90px;
        padding-right: 5px;
        img {
          width: 68px;
          height: 90px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>