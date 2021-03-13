<template>
  <div class="products">
    <div class="head">
      <div class="title">
        {{ title }}
      </div>
      <a href="" class="view-all">
        Xem tất cả <i class="fas fa-angle-double-right"></i>
      </a>
    </div>
    <div class="row">
      <div
        class="col-md-3"
        v-for="product in products"
        :key="product.productId"
      >
        <the-product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import TheProduct from "./TheProduct.vue";
export default {
  components: { TheProduct },
  props: ["title"],
  data() {
    return {
      products: [
        {
          productId: 1,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 2,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 3,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 4,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 5,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 6,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 7,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 8,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 9,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 10,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 11,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        },
        {
          productId: 12,
          productImage: "product.jpg",
          productDiscount: 10,
          productName:
            "Máy tính để bàn HP Z2 G5 Tower Workstation, Intel core i5 10500",
          productOldPrice: 19880000,
          productPrice: 17880000
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";

.products {
  margin-bottom: 20px;
  .head {
    border-bottom: 2px solid $color-red;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .title {
      background-color: $color-red;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 16px;
      padding: 10px 15px;
      position: relative;
      top: 1px;
      &::before {
        content: "";
        position: absolute;
        background-image: url("../../assets/images/ic_title.png");
        background-position: center;
        right: -45px;
        top: 0;
        background-size: contain;
        background-repeat: no-repeat;
        width: 50px;
        height: 45px;
      }
    }
    .view-all {
      display: flex;
      align-items: flex-end;
      color: $color-black;
      i {
        position: relative;
        top: -3px;
        margin-left: 5px;
      }
    }
  }
}
</style>
