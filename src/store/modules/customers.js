import axios from "axios";

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
    }
  },
  actions: {
    getCustomer: ({ commit }, customerId) => {
      axios
        .get("http://localhost:50052/api/customer/" + customerId)
        .then(res => {
          commit("setCustomer", res.data);
        });
    },

    register: ({ commit }, customer) => {
      axios.post("http://localhost:50052/register", customer).then(
        commit("setCustomer", customer),
        Notification.success({
          title: "Thành công!",
          message: "Đăng ký thành công",
          type: "success"
        })
      );
    },

    login: async (context, account) => {
      await axios.post("http://localhost:50052/login", account).then(res => {
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
        }
      });
    }
  }
};
