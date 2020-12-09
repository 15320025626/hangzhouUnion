<template>
  <div class="reported">
    <div class="topheader">

      <van-nav-bar title="突发事件上报"
                   left-arrow
                   @click-left="onClickLeft" />
    </div>
    <div class="listbox">
      <div class="list"
           v-for="(item,index) in listData"
           :key="index">
        <div class="data">{{item.data}}</div>
        <div class="data">{{item.name}}</div>
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
          data: "2020.11.23",
          name: "突发事件报告",
        },
        {
          data: "2020.11.23",
          name: "突发事件报告",
        },



      ]
    }
  },
  methods: {
    onClickLeft () { }
  }
}
</script>

<style lang="scss" scoped>
.reported {
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
  .listbox {
    padding: 15px 15px;
    .list {
      margin-bottom: 15px;
      padding: 12px 15px;
      // height: 45px;
      background: #ffffff;
      box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.07);
      border-radius: 10px;
      display: flex;

      .data {
        // padding-left: 15px;
        // padding-top: 12px;
        line-height: 21px;
        margin-right: 40px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
    }
  }
}
</style>