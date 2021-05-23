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
          <li v-for="category in categories" :key="category.productCategoryId">
            <router-link :to="routerPath(category.productCategoryId)">
              {{ category.productCategoryName }}
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/news">Tin tức</router-link>
      </li>
      <li>
        <router-link to="/">Liên hệ</router-link>
      </li>
    </ul>
    <div class="user" @click="userClick">
      <i class="fas fa-user"></i>
      <div class="login">
        <div v-if="!isLogin.status">
          Đăng ký <br />
          Đăng nhập
        </div>
        <div v-else>
          Xin chào! <br />
          {{ isLogin.userName }}
        </div>
      </div>

      <div class="popover-login" v-if="isPopover">
        <div class="info" @click="openManageOrder">
          <i class="fas fa-id-card-alt"></i>
          Quản lý đơn hàng
        </div>
        <div class="signout" @click="signOut">
          <i class="fas fa-sign-out-alt"></i>
          Đăng xuất tài khoản
        </div>
      </div>
    </div>
    <div class="cart">
      <router-link to="/cart">
        <i class="fas fa-shopping-cart"></i>
        <span>{{ total }}</span>
      </router-link>
    </div>
    <Dialog :visible.sync="isOpenDialog" width="30%" title="Tài khoản">
      <Tabs v-model="activeName">
        <tab-pane label="Đăng nhập" name="first" v-model="activeName">
          <base-input v-model="accountLogin.phoneNumber">
            Số điện thoại
            <span
              v-if="!fieldValidate.login.phoneNumber"
              slot="tooltip"
              class="tooltip tooltip--input"
            >
              Dữ liệu không được để trống
            </span>
          </base-input>

          <base-input
            v-model="accountLogin.password"
            @keyup.enter.native="login"
          >
            Mật khẩu
            <span
              v-if="!fieldValidate.login.password"
              slot="tooltip"
              class="tooltip tooltip--input"
            >
              Dữ liệu không được để trống
            </span>
          </base-input>

          <base-button class="btn btn--red w-100" @click.native="login">
            Đăng nhập
          </base-button>
        </tab-pane>
        <tab-pane label="Đăng ký" name="second">
          <base-input v-model="accountRegister.firstName">
            Họ
            <span
              v-if="!fieldValidate.register.firstName"
              slot="tooltip"
              class="tooltip tooltip--input"
            >
              Dữ liệu không được để trống
            </span>
          </base-input>

          <base-input v-model="accountRegister.lastName">
            Tên
            <span
              v-if="!fieldValidate.register.lastName"
              slot="tooltip"
              class="tooltip tooltip--input"
            >
              Dữ liệu không được để trống
            </span>
          </base-input>

          <base-input v-model="accountRegister.phoneNumber">
            Số điện thoại
            <span
              v-if="!fieldValidate.register.phoneNumber"
              slot="tooltip"
              class="tooltip tooltip--input"
            >
              Dữ liệu không được để trống
            </span>
          </base-input>

          <base-input v-model="accountRegister.email">
            Địa chỉ Email
          </base-input>

          <base-input v-model="accountRegister.password">
            Mật khẩu
          </base-input>

          <base-input v-model="accountRegister.city">
            Tỉnh / Thành phố
          </base-input>

          <base-input v-model="accountRegister.adress">
            Địa chỉ
          </base-input>

          <template>
            <label class="lblGender">Giới tính</label>

            <Radio v-model="accountRegister.gender" :label="0">Nam</Radio>
            <Radio v-model="accountRegister.gender" :label="1">Nữ</Radio>
          </template>
          <base-button class="btn btn--red w-100" @click.native="register">
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
import { Notification } from "element-ui";

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
      isPopover: false,

      isLogin: {
        status: false,
        userName: null
      },

      total: 0,

      isOpenDialog: false,

      activeName: "first",

      fieldValidate: {
        login: {
          phoneNumber: true,
          password: true
        },

        register: {
          firstName: true,
          lastName: true,
          phoneNumber: true
        }
      },

      accountLogin: {
        phoneNumber: null,
        password: null
      },

      accountRegister: {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        email: null,
        city: null,
        adress: null,
        gender: 0,
        password: null
      }
    };
  },
  computed: {
    ...mapGetters("categories", { categories: "getCategories" }),
    ...mapGetters("customers", {
      loginStatus: "getLoginStatus",
      customer: "getCustomer"
    })

    // total() {
    //   let total = JSON.parse(localStorage.getItem("cart")).length;
    //   return total;
    // }
  },
  methods: {
    ...mapActions("categories", { loadData: "loadData" }),
    ...mapActions("customers", { registerAcc: "register", loginAcc: "login" }),

    routerPath(id) {
      return `/category/${id}`;
    },

    getLoginStatus() {
      if (sessionStorage.login) {
        this.isLogin.status = sessionStorage.login;
        this.isLogin.userName = sessionStorage.name;
      } else {
        this.isLogin.status = false;
        this.isLogin.userName = null;
      }
    },
    async login() {
      await this.loginAcc(this.accountLogin);

      if (this.loginStatus) {
        Notification.success({
          title: "Thành công!",
          message: "Đăng nhập thành công",
          type: "success"
        });

        this.isOpenDialog = false;
        this.getLoginStatus();
      } else {
        Notification.error({
          title: "Thất bại!",
          message: "Sai tên đăng nhập hoặc mật khẩu"
        });
      }
    },

    async register() {
      await this.registerAcc(this.accountRegister);

      this.activeName = "first";
      this.accountRegister = "null";
    },

    userClick() {
      if (this.isLogin.status) {
        this.isPopover = !this.isPopover;
      } else {
        this.isOpenDialog = !this.isOpenDialog;
      }
    },

    signOut() {
      sessionStorage.clear();
      this.getLoginStatus();
      this.isPopover = false;
      this.isOpenDialog = false;
    },

    openManageOrder() {
      this.$router.push("/order-management");
    }
  },
  created() {
    this.getLoginStatus();
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
  position: relative;
  > i {
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
  .popover-login {
    position: absolute;
    background: #fff;
    z-index: 999;
    bottom: -105px;
    left: -40px;
    padding: 10px 0;
    width: 200px;
    background-color: #f9f9f9;
    border-radius: 4px;

    i {
      margin-right: 4px;
    }

    .info {
      border-bottom: 1px solid #e8e8e8;
    }

    .info,
    .signout {
      padding: 10px 20px;

      &:hover {
        background-color: #fff;
        color: $color-red;
      }
    }
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
  .tooltip--input {
    right: 0px;
  }
}
</style>
