import axios from "axios";
import Vue from "vue";

export default {
  namespaced: true,
  state: {
    news: [],
    new: {}
  },
  getters: {
    getNews: state => {
      return state.news;
    },
    getNew: state => {
      return state.new;
    }
  },
  mutations: {
    setNews: (state, news) => {
      state.news = news;
    },
    setNew: (state, news) => {
      state.new = news;
    },
    addNews: (state, news) => {
      state.news.push(news);
    },
    editNews: (state, news) => {
      let index = state.news.findIndex(item => item.newsId == news.newsId);
      state.news[index] = news;
      Vue.set(state.news, index, news);
    },
    removeNews: (state, id) => {
      let index = state.news.findIndex(item => item.newsId == id);
      state.news.splice(index, 1);
    }
  },
  actions: {
    loadData: ({ commit }) => {
      axios
        .get("http://localhost:51917/api/newss")
        .then(res => commit("setNews", res.data));
    },
    loadDataById: async ({ commit }, id) => {
      await axios
        .get("http://localhost:51917/api/newss/" + id)
        .then(res => commit("setNew", res.data));
    },
    addNews: ({ commit }, news) => {
      axios
        .post("http://localhost:51917/api/newss", news)
        .then(res => commit("addNews", res.data));
    },
    editNews: ({ commit }, news) => {
      axios
        .put("http://localhost:51917/api/newss/" + news.newsId, news)
        .then(commit("editNews", news));
    },
    removeNews: ({ commit }, id) => {
      axios
        .delete("http://localhost:51917/api/newss/" + id)
        .then(commit("removeNews", id));
    }
  }
};
