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
            :page-count="2"
            :page-range="3"
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
  props: ["categoryId"],
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
    ...mapActions("products", {
      loadProducts: "loadData",
      loadProductsByCategory: "loadProductsByCategory"
    })
  },
  created() {
    this.categoryId
      ? this.loadProductsByCategory(this.categoryId)
      : this.loadProducts();
  },

  watch: {
    categoryId() {
      if (this.categoryId) this.loadProductsByCategory(this.categoryId);
    }
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
