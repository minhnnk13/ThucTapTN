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
    }
  },
  actions: {
    loadData: async ({ commit, state }) => {
      await axios
        .get("http://localhost:50052/api/orders")
        .then(res => commit("setOrders", res.data));
      state.orders.forEach(item => {
        let orderProducts = item.orderProducts.split(",");
        orderProducts.forEach((item, index) => {
          orderProducts[index] = Number(item);
        });
        let orderProductItems = [];
        // let count = 0;
        // for (let i = 0; i < orderProducts.length; i++) {
        //   for (let j = orderProducts.length - 1; j > i; j--) {
        //     if (orderProducts[i] == orderProducts[j]) {
        //       orderProducts.splice(i, 1);
        //       count = count + 1;
        //     }
        //   }
        // }

        orderProducts.forEach(productId => {
          axios
            .get("http://localhost:50052/api/products/" + productId)
            .then(res => orderProductItems.push(res.data));
        });
        item.orderProductItems = orderProductItems;
      });
    },
    loadDataById: ({ commit }, id) => {
      axios
        .get("http://localhost:50052/api/orders/" + id)
        .then(res => commit("setOrder", res.data));
    },
    addOrder: ({ commit }, order) => {
      axios
        .post("http://localhost:50052/api/orders", order)
        .then(
          res => (
            commit("addOrder", res.data),
            localStorage.setItem("orderId", res.data.orderId)
          )
        );
    },
    loadOrderProduct: ({ commit }, order) => {
      let orderProducts = order.orderProducts.split(",");
      orderProducts.forEach(item => {
        axios
          .get("http://localhost:50052/api/products/" + item)
          .then(res => commit("setOrderProducts", res.data));
      });
    },

    getCustomerByCustomerId: ({ commit }, customerId) => {
      axios
        .get("http://localhost:50052/api/orders/customerId/" + customerId)
        .then(res => commit("setOrders", res.data));
    }
  }
};
