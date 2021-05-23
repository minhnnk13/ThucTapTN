import axios from "axios";
import Vue from "vue";

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
    //load dữ liệu từ api
    setProducts: (state, product) => {
      state.products = product;
    },
    setProduct: (state, product) => {
      state.product = product;
    },

    //thêm dữ liệu
    addProduct: (state, product) => {
      state.products.push(product);
    },

    //xóa sản phẩm
    removeProduct: (state, id) => {
      let index = state.products.findIndex(item => item.productId == id);
      state.products.splice(index, 1);
    },

    //sửa
    editProduct: (state, product) => {
      let index = state.products.findIndex(
        item => item.productId == product.productId
      );
      state.products[index] = product;
      Vue.set(state.products, index, product);
    }
  },
  actions: {
    //gọi api load toàn bộ sản phẩm
    loadData: ({ commit }) => {
      axios
        .get("http://localhost:50052/api/products")
        .then(res => commit("setProducts", res.data));
    },
    //lấy theo id
    loadDataById: async ({ commit }, id) => {
      await axios
        .get("http://localhost:50052/api/products/" + id)
        .then(res => commit("setProduct", res.data));
    },

    //lấy theo danh mục
    loadProductsByCategory: ({ commit }, id) => {
      axios
        .get("http://localhost:50052/api/products/productcategory/" + id)
        .then(res => commit("setProducts", res.data));
    },

    //gọi api thêm
    addProduct: ({ commit }, product) => {
      axios
        .post("http://localhost:50052/api/products", product)
        .then(res => commit("addProduct", res.data));
    },

    //sửa product api
    editProduct: async ({ commit }, product) => {
      await axios
        .put("http://localhost:50052/api/products/" + product.productId, product)
        .then(commit("editProduct", product));
    },

    //xóa product
    removeProduct: ({ commit }, id) => {
      axios
        .delete("http://localhost:50052/api/products/" + id)
        .then(commit("removeProduct", id));
    }
  }
};
