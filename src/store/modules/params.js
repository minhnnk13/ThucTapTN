import axios from "axios";
import Vue from "vue";

export default {
  namespaced: true,
  state: {
    params: [],
    param: {}
  },
  getters: {
    getParams: state => {
      return state.params;
    },
    setParam: (state, param) => {
      state.param = param;
    },
    editParam: (state, param) => {
      let index = state.params.findIndex(item => item.paramId == param.paramId);
      state.params[index] = param;
      Vue.set(state.params, index, param);
    },
    removeParam: (state, id) => {
      let index = state.params.findIndex(item => item.paramId == id);
      state.params.splice(index, 1);
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
    },
    loadDataById: ({ commit }, id) => {
      axios
        .get("http://localhost:8080/api/param/" + id)
        .then(res => commit("setParam", res.data));
    },
    editParam: ({ commit }, param) => {
      axios
        .put("http://localhost:8080/api/param/" + param.paramId, param)
        .then(commit("editParam", param));
    },
    removeParam: ({ commit }, id) => {
      axios
        .deletess("http://localhost:8080/api/param/" + id)
        .then(commit("removeParam", id));
    }
  }
};
