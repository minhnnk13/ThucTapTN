<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-9 pl-0">
          <the-banner />
        </div>
      </div>
      <h2 class="title">
        PC - Máy tính bộ - Laptop cũ/mới
      </h2>
    </div>
    <div class="products">
      <div class="container">
        <products :title="'PC ĐỒ HOẠ – WORKSTATION'" />
        <products :title="'Máy tính để bàn'" />
        <products :title="'Máy tính chơi game'" />
        <products :title="'Màn hình máy tính'" />
      </div>
    </div>
    <div class="banner">
      <img width="100%" src="../assets/images/banner2.jpg" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <the-news />
        </div>
        <div class="col-md-6">
          <the-feedback />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "../components/products/Products.vue";
import TheFeedback from "../components/content/TheFeedback.vue";
import TheNews from "../components/content/TheNews.vue";
import TheBanner from "../components/TheBanner.vue";
export default {
  components: {
    TheFeedback,
    TheNews,
    TheBanner,
    Products
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.content {
  .title {
    background-color: $color-black;
    color: #fff;
    font-size: 20px;
    padding: 5px 15px;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .products {
    position: relative;
    background-color: rgb(245, 245, 245);
  }
}
</style>
