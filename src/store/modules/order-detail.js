import axios from "axios";

export default {
  namespaced: true,
  state: {
    orders: [],
    order: {},
    orderProducts: []
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
    setOrder: (state, order) => {
      state.order = order;
    },
    addOrder: (state, order) => {
      state.orders.push(order);
    },
    setOrderProducts: (state, orderProduct) => {
      state.orderProducts.push(orderProduct);
    }
  },
  actions: {
    getOrderDetail: ({ commit }, orderId) => {
      axios
        .get("http://localhost:50052/api/OrderProduct/orderId/" + orderId)
        .then(res => {
          commit("setOrder", res.data);
        });
    }
  }
};
