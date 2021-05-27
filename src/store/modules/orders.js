import axios from "axios";
import { Notification } from "element-ui";

export default {
  namespaced: true,
  state: {
    orders: [],
    order: {},
    orderProducts: [],
    requestLogin: false,
    totalOrders: []
  },

  getters: {
    getOrders: state => {
      return state.orders;
    },
    getOrder: state => {
      return state.order;
    },
    getOrderProducts: state => {
      return state.orderProducts;
    }
  },
  mutations: {
    setOrders: (state, orders) => {
      state.orders = orders;
    },
    setOrder: (state, order) => {
      state.order = order;
    },
    addOrder: (state, order) => {
      state.orders.push(order);
    },
    setOrderProducts: (state, orderProduct) => {
      state.orderProducts.push(orderProduct);
    },

    requestLogin(state) {
      state.requestLogin = !state.requestLogin;
    },

    setTotalOrder(state, total) {
      state.totalOrders = total;
    }
  },
  actions: {
    loadData: async ({ commit }) => {
      await axios
        .get("http://localhost:51917/api/orders")
        .then(res => commit("setOrders", res.data));
    },

    getDetailOrders: async ({ commit }) => {
      let orders = [];
      await axios
        .get("http://localhost:51917/api/orders")
        .then(res => (orders = res.data));

      orders.forEach(order => {
        axios
          .get(
            "http://localhost:51917/api/OrderProduct/orderId/" + order.orderId
          )
          .then(res => (order.products = res.data), commit("addOrder", order));
      });
    },

    loadDataById: ({ commit }, id) => {
      axios
        .get("http://localhost:51917/api/orders/" + id)
        .then(res => commit("setOrder", res.data));
    },
    addOrder: async ({ commit }, order) => {
      await axios.post("http://localhost:51917/api/orders", order).then(
        res => (
          commit("addOrder", res.data),
          localStorage.setItem("orderId", res.data.orderId),
          localStorage.setItem("totalAmount", res.data.totalAmount),
          localStorage.setItem("createdDate", res.data.createdDate)
        ),
        Notification.success({
          title: "Thành công!",
          message: "Đặt hàng thành công!",
          type: "success"
        })
      );
    },
    loadOrderProduct: ({ commit }, order) => {
      let orderProducts = order.orderProducts.split(",");
      orderProducts.forEach(item => {
        axios
          .get("http://localhost:51917/api/products/" + item)
          .then(res => commit("setOrderProducts", res.data));
      });
    },

    getCustomerByCustomerId: ({ commit }, customerId) => {
      axios
        .get("http://localhost:51917/api/orders/customerId/" + customerId)
        .then(res => commit("setOrders", res.data));
    },

    getTotalOrderByYear: ({ commit }, yearh) => {
      axios
        .get("http://localhost:51917/api/Orders/total-order/" + yearh)
        .then(res => commit("setTotalOrder", res.data));
    }
  }
};
