<template>
  <div class="feeback">
    <div class="title">
      <h1>
        KHÁCH HÀNG NÓI VỀ MẠNH NHẤT COMPUTER
      </h1>
    </div>
    <div class="content">
      <img src="../../assets/images/feeback.jpg" alt="" />
      <img src="../../assets/images/feeback.jpg" alt="" />
      <img src="../../assets/images/feeback.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";

.feeback {
  .title {
    color: $color-red-brown;
    position: relative;
    text-align: center;
    margin: 30px 0;
    font-family: Barlow-Bold;
    text-transform: uppercase;
    font-size: 12px;
    &::before {
      content: "";
      position: absolute;
      width: 50px;
      height: 3px;
      background-color: #000;
      bottom: -10px;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }
  .content {
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    background-color: #0000001f;
    img {
      width: 33%;
    }
  }
}
</style>
