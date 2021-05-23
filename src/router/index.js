import Vue from "vue";
import VueRouter from "vue-router";
const DefaultContainer = () => import("../admin/containers/DefaultContainer");

// Views - Pages
// const Page404 = () => import("../admin/views/pages/Page404");
// const Page500 = () => import("../admin/views/pages/Page500");
// const Login = () => import("../admin/views/pages/Login");
// const Register = () => import("../admin/views/pages/Register");

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
        path: "/products",
        name: "Products",
        component: () =>
          import(/* webpackChunkName: "Products" */ "../views/Products.vue")
      },
      {
        path: "/category/:categoryId",
        name: "ProductCategory",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ProductCategory" */ "../views/Products.vue"
          )
      },
      {
        path: "/news",
        name: "News",
        component: () =>
          import(/* webpackChunkName: "News" */ "../views/News.vue")
      },
      {
        path: "/news/:id",
        name: "NewsDetail",
        props: true,
        component: () =>
          import(/* webpackChunkName: "NewsDetail" */ "../views/NewsDetail.vue")
      },

      {
        path: "/products/:id",
        name: "ProductDetail",
        props: true,
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
      },
      {
        path: "/pay-detail",
        name: "PayDetail",
        component: () =>
          import(/* webpackChunkName: "PayDetail" */ "../views/PayDetail.vue")
      },
      {
        path: "/order-management",
        name: "OrderManagement",
        component: () =>
          import(
            /* webpackChunkName: "OrderManagement" */ "../views/OrderManagement.vue"
          )
      },
      {
        path: "/order-detail/:orderId",
        props: true,
        name: "OrderDetail",
        component: () =>
          import(
            /* webpackChunkName: "OrderDetail" */ "../views/OrderDetail.vue"
          )
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
        path: "product-category/:id",
        name: "products",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "Categories" */ "../admin/views/pages/Products"
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
      },
      {
        path: "orders",
        name: "Orders",
        component: () =>
          import(/* webpackChunkName: "Orders" */ "../admin/views/pages/Orders")
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
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
