export default {
  namespaced: true,
  state: {
    cart: []
  },
  getters: {
    getCart: state => {
      return state.cart;
    }
  },
  mutations: {
    loadCart: (state, cart) => {
      state.cart = cart;
    },
    addToCart: (state, cart) => {
      let index = state.cart.findIndex(
        item => (item.productId = cart.productId)
      );
      if (index == -1) {
        state.cart.push(cart);
      } else {
        state.cart[index].count += 1;
      }
    },
    removeCart: (state, cart) => {
      let index = state.cart.findIndex(
        item => (item.productId = cart.productId)
      );
      state.cart.splice(index, 1);
    }
  },
  actions: {
    loadCart: ({ commit }) => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      commit("loadCart", cart);
    },
    addToCart: ({ commit }, cart) => {
      commit("addToCart", cart);
    },
    removeCart: ({ commit }, cart) => {
      commit("removeCart", cart);
    }
  }
};
