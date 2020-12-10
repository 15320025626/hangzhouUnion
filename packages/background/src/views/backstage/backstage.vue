<template>
  <div class="backstagebox">
    <div class="backstage">
      <div class="bgsheader">
        <div class="btnbox">
          <div class="img"><img src="../../../public/img/search.png"
                 alt="" /></div>
          <div class="black">查询条件</div>
          <div class="btn">信息员周报</div>
          <div class="btn">突发事件上报</div>
        </div>
      </div>
    </div>
    <div class="select"></div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      activebtn1: false,
      activebtn2: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.backstagebox {
  width: 1208px;
  height: 651px;
  background-color: rgb(116, 118, 119);
  .backstage {
    margin-top: 10px;

    width: 1208px;
    height: 641px;
    background-color: rgba(230, 243, 253, 1);
    // height: 300px;
    .bgsheader {
      width: 100%;
      background-color: rgba(255, 255, 255, 0.223529411764706);
      // height: 500px;
      .btnbox {
        padding: 0px 10px;

        height: 44px;
        // width: 1194px;
        // width: 100%;
        line-height: 44px;
        margin: 0px 0px 0px 20px;
        background-color: #fff;
        background-color: rgba(255, 255, 255, 0.223529411764706);
        box-sizing: border-box;
        border-radius: 0px;
        border: 2px solid rgba(224, 233, 249, 1);
        display: flex;
        justify-content: flex-start;
        .img {
          width: 20px;
          height: 20px;
          margin-right: 20px;
          img {
            height: 20px;
            object-fit: cover;
          }
        }
        .black {
          line-height: 44px;
          font-size: 14px;
          font-weight: bold;
          margin-right: 20px;
        }
        .btn {
          margin: 0px 0px;
          // margin-top: -2px;
          width: 102px;
          height: 42px;
          line-height: 42px;
          background-color: rgba(255, 255, 255, 1);
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          color: #02a7f0;
          margin-right: 10px;
          border-radius: 5px;
        }
        .btn:hover {
          background-color: #02a7f0;
          color: #fff;
        }
      }
    }
  }
}
</style>
