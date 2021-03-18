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
import { mapActions, mapGetters } from "vuex";
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
          >`
    };
  },
  computed: {
    ...mapGetters("products", { products: "getProducts" })
  },
  methods: {
    ...mapActions("products", { loadProducts: "loadData" })
  },
  created() {
    this.loadProducts();
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
