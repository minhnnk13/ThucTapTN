<template>
  <div class="sidebar">
    <div style="display: none">{{ currentRouteName }}</div>
    <ul class="category">
      <li>
        <i class="fas fa-bars"></i> Danh mục sản phẩm
        <ul v-category>
          <li v-for="category in categories" :key="category.productCategoryId">
            <router-link :to="routerPath(category.productCategoryId)">
              {{ category.productCategoryName }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  directives: {
    category: {
      update: (el, binding, vnode) => {
        console.log(vnode.context.currentRouteName);
        if (
          vnode.context.currentRouteName == "Home" ||
          vnode.context.currentRouteName == ""
        ) {
          el.style.display = "block";
        } else {
          el.style.display = "";
        }
      },
      bind: (el, binding, vnode) => {
        console.log(vnode.context.currentRouteName);
        if (
          vnode.context.currentRouteName == "Home" ||
          vnode.context.currentRouteName == ""
        ) {
          el.style.display = "block";
        } else {
          el.style.display = "";
        }
      }
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    ...mapGetters("categories", { categories: "getCategories" })
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {
    ...mapActions("categories", { loadData: "loadData" }),

    routerPath(id) {
      return `/category/${id}`;
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.sidebar {
  .category > li {
    padding: 12px 15px;
    background-color: $color-black;
    color: #fff;
    position: relative;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 4px solid $color-red;
    cursor: pointer;
    &:hover ul {
      display: block;
    }
    &:hover .overlay {
      display: block;
    }

    li {
      display: inline-block;
      width: 100%;
    }
    i {
      font-size: 20px;
      color: #fff;
      margin-right: 10px;
    }

    ul {
      display: none;
      position: absolute;
      top: 51px;
      left: 0;
      width: 100%;
      z-index: 9;
      background-color: #fff;
      li {
        a {
          color: $color-black;
          padding: 10px 15px;
          border: 1px solid #ccc;
          display: block;
          text-transform: uppercase;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
}
</style>
