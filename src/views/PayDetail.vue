<template>
  <div class="order-detail">
    <div class="container">
      <div class="head">
        <div class="title f-b">
          <h3>Đơn hàng số #{{ orderProducts[0].orderId }}</h3>
        </div>
        <div class="time">
          <span class="f-b">Thời gian đặt mua: </span>
          {{ orderProducts[0].createdDate }}
        </div>
      </div>
      <div class="content">
        <div class="title">
          Thông tin đơn hàng
        </div>
        <div class="main">
          <table width="100%">
            <tr>
              <th>STT</th>
              <th>Ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Tổng</th>
            </tr>

            <tr
              v-for="(product, index) in orderProducts"
              :key="product.productId"
            >
              <td>
                {{ index + 1 }}
              </td>
              <td>
                <img
                  width="160px"
                  :src="require(`@/assets/images/${product.productImage}`)"
                />
              </td>
              <td class="f-b">
                {{ product.productName }}
              </td>
              <td class="f-b">{{ formatMoney(product.productPrice) }} VND</td>
              <td>
                {{ product.quantity }}
              </td>
              <td>
                {{ formatMoney(product.productPrice * product.quantity) }}
              </td>
            </tr>
            <tr>
              <td colspan="5" class="t-r">
                Tổng giá trị đơn hàng
              </td>
              <td colspan="1">
                <span class="f-b">{{
                  formatMoney(orderProducts[0].totalAmount)
                }}</span>
                VND
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("orderDetail", { orderProducts: "getOrderProducts" })
  },
  methods: {
    formatMoney(money) {
      return new Intl.NumberFormat().format(money);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.container {
  .head {
    margin-top: 60px;
    margin-bottom: 20px;
    .title {
      margin-bottom: 12px;
      font-family: Barlow-Bold;
    }
  }
  .content {
    .title {
      color: $color-red;
      font-weight: 700;
      margin-bottom: 12px;
    }

    .main {
      table {
        tr:first-child {
          background-color: rgb(238, 238, 238);
        }
        tr {
          line-height: 40px;
          border-bottom: 1px solid #cecece;
          th,
          td {
            padding: 0 12px;
          }
        }
      }
    }
  }
}
</style>
