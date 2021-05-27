<template>
  <div class="product">
    <router-link :to="'products/' + product.productId">
      <div class="box-thumbnail">
        <div class="thumbnail-lazy">
          <img
            v-if="product.productImage"
            :src="require(`../../assets/images/${product.productImage}`)"
          />
        </div>
      </div>
      <div class="product__name">
        <div class="format-text">
          {{ product.productName }}
        </div>
      </div>
      <div class="product__price">
        <div class="old-price">
          {{ formatMoney(product.productOldPrice) }} <span>đ</span>
        </div>
        <div class="price">
          {{ formatMoney(product.productPrice) }} <span>đ</span>
        </div>
      </div>
      <div class="product__discount">-{{ product.productDiscount }}%</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["product"],

  methods: {
    formatMoney(money) {
      return new Intl.NumberFormat().format(money);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.product {
  position: relative;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
  }
  &:hover img {
    transform: scale(1.1);
    transition: all 0.5s;
  }
  a {
    display: block;
    color: $color-black;
    font-family: Barlow-Bold;
    .box-thumbnail {
      padding-top: 69.7%;
    }
  }
  &__name {
    text-align: center;
    padding: 15px 20px;
    .format-text {
      -webkit-line-clamp: 3;
      min-height: 65px;
    }
  }
  &__price {
    display: flex;
    color: $color-red;
    text-align: center;
    justify-content: center;

    span {
      text-decoration: underline;
    }
    .old-price {
      margin-right: 10px;
      text-decoration: line-through;
      opacity: 0.7;
    }
  }
  &__discount {
    padding: 10px 5px;
    background-color: $color-red;
    position: absolute;
    top: 30px;
    left: 0;
    z-index: 2;
    color: #fff;
    font-size: 16px;
  }
}
</style>
