import Vue from "vue";
import Vuex from "vuex";
import accounts from "./modules/accounts";
import news from "./modules/news";
import params from "./modules/params";
import products from "./modules/products";
import categories from "./modules/categories";
import banners from "./modules/banners";
import cart from "./modules/cart";
import orders from "./modules/orders";
import customers from "./modules/customers";
import orderDetail from "./modules/order-detail";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarShow: "responsive",
    sidebarMinimize: false
  },
  mutations: {
    toggleSidebarDesktop(state) {
      const sidebarOpened = [true, "responsive"].includes(state.sidebarShow);
      state.sidebarShow = sidebarOpened ? false : "responsive";
    },
    toggleSidebarMobile(state) {
      const sidebarClosed = [false, "responsive"].includes(state.sidebarShow);
      state.sidebarShow = sidebarClosed ? true : "responsive";
    },
    set(state, [variable, value]) {
      state[variable] = value;
    }
  },
  actions: {},
  modules: {
    news,
    params,
    products,
    accounts,
    categories,
    banners,
    cart,
    orders,
    customers,
    orderDetail
  }
});
