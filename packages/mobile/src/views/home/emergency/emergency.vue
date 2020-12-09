<template>
  <div class="emergency">
    <div class="topheader">

      <van-nav-bar title="新增突发事件"
                   left-arrow
                   @click-left="onClickLeft" />
    </div>
    <div class="form">
      <!-- <div class="position">
        <div class="img"><img src="../../../../public/img/more@2x.png"
               alt=""></div>
      </div> -->
      <div class="relative">
        <div class="position">
          <div class="img"><img src="../../../../public/img/more@2x.png"
                 alt=""></div>
        </div>
        <van-field readonly
                   clickable
                   name="picker"
                   :value="value1"
                   label="发生地区："
                   @click="showPicker1 = true" />
        <!-- <template>
          <div class="slotOne1">
            <div>我是slotOne1组件</div>
            <slot></slot>
          </div>
        </template> -->
        <van-popup v-model="showPicker1"
                   position="bottom">

          <van-picker show-toolbar
                      :columns="columns"
                      @confirm="onConfirm1"
                      @cancel="showPicker1 = false" />

        </van-popup>
      </div>
      <div class="relative">
        <van-field readonly
                   clickable
                   name="datetimePicker"
                   :value="value2"
                   label="发生事件："
                   @click="showPicker2 = true" />

        <van-popup v-model="showPicker2"
                   position="bottom">
          <van-datetime-picker type="date"
                               :columns-order="['year', 'month', 'day']"
                               :formatter="formatter"
                               @confirm="onConfirm2"
                               @cancel="showPicker2 = false" />

        </van-popup>
      </div>

      <div class="height">

        <!-- <van-cell-group> -->
        <van-field v-model="value"
                   type="textarea"
                   label="详情描述："
                   placeholder="请输入事件发生的具体情况" />

        <!-- </van-cell-group> -->
      </div>
      <div class="uploader">
        <van-uploader v-model="fileList"
                      multiple
                      :max-count="3" />

      </div>
      <div class="btn">提交</div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker1: false,
      value2: '',
      showPicker2: false,
      value: "",
      fileList: [],
    };
  },
  methods: {
    onConfirm1 (value) {
      this.value1 = value;
      this.showPicker1 = false;
    },
    onConfirm2 (date) {
      this.value2 = `${date.getYear() - 100 + 2000}年${date.getMonth() + 1}月${date.getDate()}日`;
      this.showPicker2 = false;
    },
    formatter (type, val) {
      if (type === 'year') {
        return val + '年';
      }
      if (type === 'month') {
        return val + '月';
      }
      if (type === 'day') {
        return val + '日';
      }
      return val;
    },
    onClickLeft () { }
  },
}
</script>

<style lang="scss" scoped>
.emergency {
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
    .relative {
      position: relative;
      .position {
        z-index: 100px;
        position: absolute;
        top: 100px;
        right: 100px;
        .img {
          width: 13px;
          height: 13px;
          img {
            height: 13px;
            object-fit: cover;
          }
        }
      }
    }

    ::v-deep .van-cell {
      padding: 15px 15px 0px 15px;

      .van-cell ::after {
        border-bottom: red 1px solid;
      }
      .van-field__label {
        -webkit-box-flex: 0;
        -webkit-flex: none;
        flex: none;
        box-sizing: border-box;
        width: 75px;
        height: 40px;
        line-height: 40px;
        margin-right: 12rem;
        color: #646566;
        text-align: left;
        word-wrap: break-word;

        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
      .van-field__control {
        border: 1px solid #ccc;
        border-radius: 20px;
        width: 260px;
        height: 40px;
      }
    }
    .height {
      ::v-deep .van-field__control {
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 260px;
        height: 134px;
        line-height: 21px;
        padding: 9px 15px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }
    .uploader {
      padding-left: 100px;
      padding-top: 15px;
      // margin: 12px 0px 0px 11px;
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
    .btn {
      margin: 25px auto;
      width: 200px;
      height: 47px;
      background: #e43428;
      border-radius: 24px;

      font-size: 15px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 47px;
      text-align: center;
    }
  }
}
</style>