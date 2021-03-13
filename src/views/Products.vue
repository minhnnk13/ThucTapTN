<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <related-products :title="'Sản phẩm mới'" />
          <related-news :title="'Bài viết mới'" />
        </div>
        <div class="col-md-9 content ">
          <div class="row">
            <div
              class="col-md-3 pr-0"
              v-for="product in products"
              :key="product.productId"
            >
              <the-product :product="product" />
            </div>
          </div>
          <paginate
            :pageCount="1"
            :container-class="'pagination'"
            :next-text="nextIcon"
            :prev-text="prevIcon"
            :page-class="'page-item'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheProduct from "../components/products/TheProduct.vue";
import RelatedNews from "../components/related/RelatedNews.vue";
import RelatedProducts from "../components/related/RelatedProducts.vue";

export default {
  components: { RelatedNews, RelatedProducts, TheProduct },
  data() {
    return {
      nextIcon: `<i
            class="fas fa-chevron-right"
          ></i
          >`,
      prevIcon: `<i
            class="fas fa-chevron-left"
          ></i
          >`,
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
.products {
  .content {
    margin-top: 40px;
  }
}
</style>
