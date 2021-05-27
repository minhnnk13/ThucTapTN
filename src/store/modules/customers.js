import axios from "axios";
import { Notification } from "element-ui";

export default {
  namespaced: true,
  state: {
    customers: [],
    customer: {},
    loginStatus: null
  },
  getters: {
    getCustomers: state => {
      return state.customers;
    },
    getLoginStatus: state => {
      return state.loginStatus;
    },
    getCustomer: state => {
      return state.customer;
    }
  },
  mutations: {
    setCustomers: (state, customers) => {
      state.customers = customers;
    },
    setCustomer: (state, customer) => {
      state.customer = customer;
    },

    logOut(state) {
      state.loginStatus = false;
    }
  },
  actions: {
    getCustomer: ({ commit }, customerId) => {
      axios
        .get("http://localhost:51917/api/customer/" + customerId)
        .then(res => {
          commit("setCustomer", res.data);
        });
    },

    register: ({ commit }, customer) => {
      axios.post("http://localhost:51917/register", customer).then(
        commit("setCustomer", customer),
        Notification.success({
          title: "Thành công!",
          message: "Đăng ký thành công",
          type: "success"
        })
      );
    },

    login: async (context, account) => {
      await axios.post("http://localhost:51917/login", account).then(res => {
        if (res.data == 0) {
          context.state.loginStatus = false;
        } else {
          context.commit("setCustomer", res.data);
          context.state.loginStatus = true;
          sessionStorage.setItem("login", true);
          sessionStorage.setItem(
            "name",
            res.data.Firstname + " " + res.data.LastName
          );
          sessionStorage.setItem("phoneNumber", res.data.PhoneNumber);
          sessionStorage.setItem("customerId", res.data.CustomerId);
          sessionStorage.setItem("address", res.data.Adress);
          sessionStorage.setItem("city", res.data.City);
          sessionStorage.setItem("email", res.data.Email);
          sessionStorage.setItem("firstName", res.data.Firstname);
          sessionStorage.setItem("lastName", res.data.LastName);
        }
      });
    }
  }
};
