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
        .get("http://localhost:51917/api/OrderProduct/orderId/" + orderId)
        .then(res => {
          commit("setOrder", res.data);
        });
    },

    addOrderDetail: async ({ commit }, products) => {
      products.forEach(async product => {
        let orderDetail = {
          productId: product.productId,
          orderId: Number(localStorage.getItem("orderId")),
          quantity: product.count
        };

        await axios
          .post("http://localhost:51917/api/OrderDetail", orderDetail)
          .then(res => {
            let orderProducts = {
              ...res.data,
              productImage: product.productImage,
              productName: product.productName,
              productPrice: product.productPrice,
              createdDate: localStorage.getItem("createdDate"),
              totalAmount: localStorage.getItem("totalAmount")
            };
            commit("setOrderProducts", orderProducts);
          });
      });
    }
  }
};
