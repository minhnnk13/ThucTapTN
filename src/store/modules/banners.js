import axios from "axios";
export default {
  namespaced: true,
  state: {
    banners: []
  },
  getters: {
    getBanners: state => {
      return state.banners;
    }
  },
  mutations: {
    setBanners: (state, banners) => {
      state.banners = banners;
    },
    addBanner: (state, banner) => {
      state.banners.push(banner);
    }
  },
  actions: {
    loadData: ({ commit }) => {
      axios
        .get("http://localhost:8080/api/banners")
        .then(res => commit("setBanners", res.data));
    },
    addBanner: ({ commit }, banner) => {
      axios
        .post("http://localhost:50052/api/banners", banner)
        .then(res => commit("addBanner", res.data));
    }
  }
};
