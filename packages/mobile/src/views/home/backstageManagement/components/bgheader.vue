<template>
  <div class="bgsheader">
    <div class="btnbox">
      <div class="img"><img src="../../../../../public/img/search.png" alt="" /></div>
      <div class="black">查询条件</div>
      <div class="btn" :class="[activebtn1 ? 'change' : 'btn']">信息员周报</div>
      <div class="btn" :class="[activebtn2 ? 'change' : 'btn']">突发事件上报</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activebtn1: false,
      activebtn2: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.bgsheader {
  width: 100%;
  background-color: rgba(230, 243, 253, 1);
  // height: 500px;
  .btnbox {
    height: 40px;
    width: 1194px;
    margin: 10px 0px 0px 20px;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.223529411764706);
    box-sizing: border-box;
    border-radius: 0px;
    border: 2px solid rgba(224, 233, 249, 1);
    display: flex;
    justify-content: flex-start;
    .img {
      width: 12px;
      height: 12px;
      margin-right: 20px;
      img {
        height: 12px;
        object-fit: cover;
      }
    }
    .black {
      font-size: 14px;
      font-weight: bold;
    }
    .btn {
    }
  }
}
</style>
