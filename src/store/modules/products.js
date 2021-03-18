import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: [],
    product: {}
  },
  getters: {
    getProducts: state => {
      return state.products;
    },
    getProduct: state => {
      return state.product;
    }
  },
  mutations: {
    setProducts: (state, product) => {
      state.products = product;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    addProduct: (state, product) => {
      state.products.push(product);
    },
    removeProduct: (state, id) => {
      let index = state.products.findIndex(item => item.productId == id);
      state.products.splice(index, 1);
    }
  },
  actions: {
    loadData: ({ commit }) => {
      axios
        .get("http://localhost:8080/api/products")
        .then(res => commit("setProducts", res.data));
    },
    loadDataById: ({ commit }, id) => {
      axios
        .get("http://localhost:8080/api/products/" + id)
        .then(res => commit("setProduct", res.data));
    },
    loadProductsByCategory: ({ commit }, id) => {
      axios
        .get("http://localhost:8080/api/products/productcategory/" + id)
        .then(res => commit("setProducts", res.data));
    },

    addProduct: ({ commit }, product) => {
      axios
        .post("http://localhost:8080/api/products", product)
        .then(res => commit("addProduct", res.data));
    },

    removeProduct: ({ commit }, id) => {
      axios
        .delete("http://localhost:8080/api/products/" + id)
        .then(commit("removeProduct", id));
    }
  }
};
