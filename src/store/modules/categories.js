import axios from "axios";

export default {
  namespaced: true,
  state: {
    categories: []
  },
  getters: {
    getCategories: state => {
      return state.categories;
    }
  },
  mutations: {
    setCategories: (state, category) => {
      state.categories = category;
    }
  },
  actions: {
    loadData: ({ commit }) => {
      axios
        .get("http://localhost:8080/api/productcategorys")
        .then(res => commit("setCategories", res.data));
    }
  }
};
