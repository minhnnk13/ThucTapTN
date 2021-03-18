<template>
  <div>
    <the-grid
      :fields="fields"
      :items="categories"
      :id="'productCategoryId'"
      :name="'productCategoryName'"
      :createDate="false"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheGrid from "../../components/commons/TheGrid.vue";
export default {
  components: { TheGrid },
  data() {
    return {
      fields: [
        {
          key: "productCategoryName",
          _style: "min-width:200px",
          label: "Danh mục sản phẩm"
        },
        {
          key: "show_details",
          label: "",
          _style: "width:1%",
          sorter: false,
          filter: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters("categories", { categories: "getCategories" })
  },
  methods: {
    ...mapActions("categories", { loadCategories: "loadData" })
  },
  created() {
    this.loadCategories();
  }
};
</script>

<style lang="scss" scoped></style>
