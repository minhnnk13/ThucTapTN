<template>
  <div class="menus">
    <ul class="menu">
      <li>
        <router-link to="/">Trang chủ</router-link>
      </li>
      <li>
        <router-link to="/about">Giới thiệu</router-link>
      </li>
      <li>
        <router-link to="/products"
          >Sản phẩm <i class="fas fa-chevron-down"></i
        ></router-link>
        <ul>
          <li
            v-for="category in categories"
            :key="category.productCategoriesId"
          >
            <router-link to="">
              {{ category.productCategoryName }}
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/news">Tin tức</router-link>
      </li>
      <li>
        <router-link to="đâs">Video</router-link>
      </li>
      <li>
        <router-link to="đâs">Liên hệ</router-link>
      </li>
    </ul>
    <div class="cart">
      <router-link to="cart">
        <i class="fas fa-shopping-cart"></i>
        <span>{{ total }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      total: 2
    };
  },
  computed: {
    ...mapGetters("categories", { categories: "getCategories" })
  },
  methods: {
    ...mapActions("categories", { loadData: "loadData" })
  },
  created() {
    this.loadData();
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.menus {
  display: flex;
  justify-content: space-between;
  .menu {
    height: 50px;
    .router-link-exact-active {
      background-color: red;
      color: #fff;
    }

    li {
      display: inline-block;
      position: relative;
      &:hover ul {
        display: block;
      }
      ul {
        position: absolute;
        display: none;
        z-index: 9;
        background-color: #fff;
        li {
          a {
            width: 250px;
            border: 1px solid #e5e5e5;
            padding: 10px 15px;
            color: rgba(102, 102, 102, 0.85);
            &:hover {
              background-color: #fff;
              color: rgba(17, 17, 17, 0.85);
            }
          }
        }
      }
    }
  }
}
.menu > li {
  a {
    padding: 15px 20px;
    display: block;
    color: $color-black;
    font-weight: 700;
    &:hover {
      background-color: red;
      color: #fff;
    }
    i {
      position: relative;
      left: 2px;
      font-size: 12px;
    }
  }
}
.cart {
  a {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
    border: 1px solid rgb(145, 145, 145);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: $color-red;
    background-color: #fff;
    position: relative;
    span {
      color: #fff;
      position: absolute;
      font-family: Barlow-Bold;
      font-size: 18px;
      top: -5px;
      right: -5px;
      background-color: $color-red;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>
