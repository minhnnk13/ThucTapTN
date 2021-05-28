<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="value => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <img height="130px" src="@/assets/images/logothuy.png" alt=""/>
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="nav" />
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import nav from "./_nav";

export default {
  name: "TheSidebar",
  data() {
    return {
      nav: [
        {
          _name: "CSidebarNav",
          _children: [
            {
              _name: "CSidebarNavItem",
              name: "Tổng quan",
              to: "/admin/dashboard",
              icon: "cil-speedometer"
            },
            {
              _name: "CSidebarNavItem",
              name: "Danh mục",
              to: "/admin/categories",
              icon: "cilTask"
            },
            {
              _name: "CSidebarNavItem",
              name: "Banner",
              to: "/admin/banners",
              icon: "cilGrid"
            },
            {
              _name: "CSidebarNavDropdown",
              name: "Sản phẩm",
              icon: "cilLaptop",
              items: []
            },
            {
              _name: "CSidebarNavItem",
              name: "Tin tức",
              to: "/admin/news",
              icon: "cilGlobeAlt"
            },
            // {
            //   _name: "CSidebarNavItem",
            //   name: "Tham số",
            //   to: "/admin/params",
            //   icon: "cilFile"
            // },
            {
              _name: "CSidebarNavItem",
              name: "Đơn hàng",
              to: "/admin/orders",
              icon: "cilFile"
            },
            {
              _name: "CSidebarNavItem",
              name: "Video",
              to: "/admin/video",
              icon: "cilStar"
            },
            {
              _name: "CSidebarNavItem",
              name: "Cài đặt",
              to: "/admin/settings",
              icon: "cilSettings"
            }
          ]
        }
      ],
      categoryItems: []
    };
  },
  computed: {
    ...mapGetters("categories", { categories: "getCategories" }),
    show() {
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    }
  },
  watch: {
    categories() {
      this.categories.forEach((category, index) => {
        this.categoryItems[index] = {
          name: category.productCategoryName,
          to: "/admin/product-category/" + category.productCategoryId
        };
      });
      this.nav[0]._children[3].items = this.categoryItems;
    }
  },
  methods: {
    ...mapActions("categories", { loadCategories: "loadData" })
  },
  created() {
    this.loadCategories();
  }
};
</script>
