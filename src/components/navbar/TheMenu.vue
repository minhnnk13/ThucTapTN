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
        <router-link to="/">Video</router-link>
      </li>
      <li>
        <router-link to="/">Liên hệ</router-link>
      </li>
    </ul>
    <div class="user" @click="isOpenDialog = true">
      <i class="fas fa-user"></i>
      <div class="login">
        Đăng ký <br />
        Đăng nhập
      </div>
    </div>
    <div class="cart">
      <router-link to="/cart">
        <i class="fas fa-shopping-cart"></i>
        <span>{{ total }}</span>
      </router-link>
    </div>
    <Dialog :visible.sync="isOpenDialog" width="30%">
      <Tabs v-model="activeName" @tab-click="handleClick" slot="title">
        <tab-pane label="Đăng nhập" name="first">
          <base-input>
            Số điện thoại
          </base-input>

          <base-input>
            Mật khẩu
          </base-input>

          <base-button class="btn btn--red w-100">
            Đăng nhập
          </base-button>
        </tab-pane>
        <tab-pane label="Đăng ký" name="second">
          <base-input>
            Họ
          </base-input>

          <base-input>
            Tên
          </base-input>

          <base-input>
            Số điện thoại
          </base-input>

          <base-input>
            Địa chỉ Email
          </base-input>

          <base-input>
            Tỉnh / Thành phố
          </base-input>

          <base-input>
            Địa chỉ
          </base-input>

          <template>
            <label class="lblGender">Giới tính</label>

            <Radio v-model="gender" :label="1">Nam</Radio>
            <Radio v-model="gender" :label="2">Nữ</Radio>
          </template>
          <base-button class="btn btn--red w-100">
            Đăng ký
          </base-button>
        </tab-pane>
      </Tabs>
    </Dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { eventBus } from "../../main";
import { Dialog, Tabs, TabPane, Radio } from "element-ui";
import BaseInput from "../control/BaseInput.vue";
import BaseButton from "../control/BaseButton.vue";

export default {
  components: {
    Dialog,
    Tabs,
    TabPane,
    BaseInput,
    BaseButton,
    Radio
  },

  data() {
    return {
      total: 0,

      isOpenDialog: false,

      activeName: "first",

      gender: ""
    };
  },
  computed: {
    ...mapGetters("categories", { categories: "getCategories" })
    // total() {
    //   let total = JSON.parse(localStorage.getItem("cart")).length;
    //   return total;
    // }
  },
  methods: {
    ...mapActions("categories", { loadData: "loadData" })
  },
  created() {
    this.loadData();
    if (localStorage.getItem("cart")) {
      this.total = JSON.parse(localStorage.getItem("cart")).length;
    }
    eventBus.$on("getCartTotal", total => {
      this.total = total;
    });
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

.user {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 700;
  i {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(145, 145, 145);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: $color-red;
    background-color: #fff;
    margin-right: 10px;
  }
}

.cart {
  a {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
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

.el-dialog__wrapper {
  .btn--red {
    margin: 12px 0 0 0;
  }
  .lblGender {
    display: block;
    font-family: Barlow-Bold;
  }
}
</style>
