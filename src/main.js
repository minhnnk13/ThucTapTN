import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "./assets/scss/main.scss";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";
import VuejsPaginate from "vuejs-paginate";
import { Tab, Tabs } from "vue-tabs-component";
Vue.component("paginate", VuejsPaginate);
Vue.component("tabs", Tabs);
Vue.component("tab", Tab);
Vue.config.productionTip = false;
Vue.use(CoreuiVue);
new Vue({
  router,
  store,
  icons,
  render: h => h(App)
}).$mount("#app");
