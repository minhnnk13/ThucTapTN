<template>
  <div class="order-management">
    <div class="container">
      <div class="row">
        <div class="customer col-md-4">
          <div class="title">
            Thông tin tài khoản
          </div>
          <div class="main">
            <table>
              <tr>
                <th>Họ và tên</th>
                <td>{{ customer.firstName + " " + customer.lastName }}</td>
              </tr>
              <tr>
                <th>
                  Giới tính
                </th>
                <td>
                  {{ genderFormat }}
                </td>
              </tr>
              <tr>
                <th>
                  Số điện thoại
                </th>
                <td>
                  {{ customer.phoneNumber }}
                </td>
              </tr>
              <tr>
                <th>
                  Email
                </th>
                <td>
                  {{ customer.email }}
                </td>
              </tr>
              <tr>
                <th>Địa chỉ</th>
                <td>
                  {{ customer.adress }}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="order col-md-8">
          <div class="title">
            Danh sách đơn hàng
          </div>
          <table>
            <tr>
              <th>
                Mã đơn hàng
              </th>
              <th>
                Tổng tiền
              </th>
              <th>
                Ngày mua
              </th>
              <th>
                Trạng thái đơn hàng
              </th>
            </tr>
            <tr v-for="order in orders" :key="order.orderId">
              <td>
                <span @click="getOrderDetail(order.orderId)">{{
                  order.orderId
                }}</span>
              </td>
              <td>{{ totalAmount(order.totalAmount) }} đ</td>
              <td>
                {{ createDate(order.createdDate) }}
              </td>
              <td>
                {{ formatStatus(order.orderStatus) }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("customers", { customer: "getCustomer" }),
    ...mapGetters("orders", { orders: "getOrders" }),

    genderFormat() {
      if (this.customer.gender == 0) {
        return "Nam";
      } else {
        return "nữ";
      }
    },

    customerId() {
      return sessionStorage.customerId;
    }
  },

  methods: {
    ...mapActions("customers", ["getCustomer"]),
    ...mapActions("orders", ["getCustomerByCustomerId"]),

    totalAmount(money) {
      return new Intl.NumberFormat().format(money);
    },

    createDate(createdDate) {
      let [month, date, yearh] = new Date(createdDate)
        .toLocaleDateString("en-US")
        .split("/");
      return date + "/" + month + "/" + yearh;
    },

    getOrderDetail(orderId) {
      this.$router.push(`order-detail/${orderId}`);
    },

    formatStatus(status) {
      let result = null;
      switch (status) {
        case 1:
          result = "Đặt hàng thành công!";
          break;
        case 2:
          result = "Đã tiếp nhận";
          break;
      }
      return result;
    }
  },

  created() {
    this.getCustomer(this.customerId);
    this.getCustomerByCustomerId(this.customerId);
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";

.order-management {
  padding-top: 60px;
  table {
    width: 100%;
    font-size: 16px;
    tr {
      line-height: 40px;
    }
  }
  .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .customer {
    border-right: 1px solid $color-red;
    table {
      tr {
        th {
          width: 120px;
        }
      }
    }
  }
  .order {
    height: calc(100vh - 330px);
    overflow: auto;
    td {
      span {
        color: #007ff0;
        cursor: pointer;
      }
    }
    tr:not(:last-child) {
      border-bottom: 1px solid #f4f4f4;
    }
  }
}
</style>
