import Vue from "vue";
import VueRouter from "vue-router";
const DefaultContainer = () => import("../admin/containers/DefaultContainer");

// Views - Pages
const Page404 = () => import("../admin/views/pages/Page404");
const Page500 = () => import("../admin/views/pages/Page500");
const Login = () => import("../admin/views/pages/Login");
const Register = () => import("../admin/views/pages/Register");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () =>
      import(
        /* webpackChunkName: "Home" */ "../container/DefaultContainer.vue"
      ),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "About" */ "../views/Home.vue")
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "About" */ "../views/About.vue")
      },
      {
        path: "/product",
        name: "Products",
        component: () =>
          import(/* webpackChunkName: "Products" */ "../views/Products.vue")
      },
      {
        path: "/news",
        name: "News",
        component: () =>
          import(/* webpackChunkName: "News" */ "../views/News.vue")
      },
      {
        path: "/product-detail",
        name: "ProductDetail",
        component: () =>
          import(
            /* webpackChunkName: "ProductDetail" */ "../views/ProductDetail.vue"
          )
      },
      {
        path: "/cart",
        name: "Cart",
        component: () =>
          import(/* webpackChunkName: "Cart" */ "../views/Cart.vue")
      },
      {
        path: "/pay",
        name: "Pay",
        component: () =>
          import(/* webpackChunkName: "Pay" */ "../views/Pay.vue")
      }
    ]
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    name: "Home",
    component: DefaultContainer,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "Dashboard" */ "../admin/views/pages/Dashboard"
          )
      },
      {
        path: "categories",
        name: "Categories",
        component: () =>
          import(
            /* webpackChunkName: "Categories" */ "../admin/views/pages/Categories"
          )
      },
      {
        path: "banners",
        name: "Banners",
        component: () =>
          import(
            /* webpackChunkName: "Banners" */ "../admin/views/pages/Banners"
          )
      },
      {
        path: "products",
        name: "Products",
        component: () =>
          import(
            /* webpackChunkName: "Products" */ "../admin/views/pages/Products"
          )
      },
      {
        path: "news",
        name: "News",
        component: () =>
          import(/* webpackChunkName: "News" */ "../admin/views/pages/News")
      },
      {
        path: "params",
        name: "Params",
        component: () =>
          import(/* webpackChunkName: "Params" */ "../admin/views/pages/Params")
      },
      {
        path: "video",
        name: "Video",
        component: () =>
          import(/* webpackChunkName: "Video" */ "../admin/views/pages/Video")
      },
      {
        path: "settings",
        name: "Settings",
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "../admin/views/pages/Settings"
          )
      }
    ]
  },

  {
    path: "/pages",
    redirect: "/pages/404",
    name: "Pages",
    component: {
      render(c) {
        return c("router-view");
      }
    },
    children: [
      {
        path: "404",
        name: "Page404",
        component: Page404
      },
      {
        path: "500",
        name: "Page500",
        component: Page500
      },
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "register",
        name: "Register",
        component: Register
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
