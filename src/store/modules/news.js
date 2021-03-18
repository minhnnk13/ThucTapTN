import axios from "axios";

export default {
  namespaced: true,
  state: {
    news: []
  },
  getters: {
    getNews: state => {
      return state.news;
    }
  },
  mutations: {
    setNews: (state, news) => {
      state.news = news;
    }
  },
  actions: {
    loadData: ({ commit }) => {
      axios
        .get("http://localhost:8080/api/newss")
        .then(res => commit("setNews", res.data));
    }
  }
};
