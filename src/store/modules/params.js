import axios from "axios";

export default {
  namespaced: true,
  state: {
    params: []
  },
  getters: {
    getParams: state => {
      return state.params;
    }
  },
  mutations: {
    setParams: (state, params) => {
      state.params = params;
    }
  },
  actions: {
    loadData: ({ commit }) => {
      axios
        .get("http://localhost:8080/api/params")
        .then(res => commit("setParams", res.data));
    }
  }
};
