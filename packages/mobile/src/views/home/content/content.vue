<template>
  <div class="content">
    <div class="topheader">

      <van-nav-bar title="新增突发事件"
                   left-arrow
                   @click-left="onClickLeft" />
    </div>
    <div class="mediumbox">
      <div class="img"
           @click="weeklyReport"><img src="../../../../public/img/mobile-app-2@2x.png"
             alt=""></div>
      <div class="img"
           @click="emergency"><img src="../../../../public/img/friend-request@2x.png"
             alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    weeklyReport () { },
    emergency () { },
  }
}
</script>

<style lang="scss" scoped>
.content {
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
  .mediumbox {
    padding: 15px 15px;
    .img {
      width: 345px;
      height: 170px;
      padding-bottom: 15px;
      img {
        width: 345px;
        object-fit: cover;
      }
    }
  }
}
</style>