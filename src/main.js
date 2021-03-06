import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CKEditor from "@ckeditor/ckeditor5-vue2";
import "bootstrap";
import "./assets/scss/main.scss";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";
import VuejsPaginate from "vuejs-paginate";
import { Tab, Tabs } from "vue-tabs-component";
import { CChartBar } from "@coreui/vue";
import "element-ui/lib/theme-chalk/index.css";
export const eventBus = new Vue();
Vue.component("paginate", VuejsPaginate);
Vue.component("tabs", Tabs);
Vue.component("tab", Tab);
Vue.component("CChartBar", CChartBar);

Vue.config.productionTip = false;
Vue.use(CoreuiVue);

Vue.use(CKEditor);
new Vue({
  router,
  store,
  icons,
  render: h => h(App)
}).$mount("#app");
