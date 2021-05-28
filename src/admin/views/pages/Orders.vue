<template>
  <div>
    <CCardBody>
      <CDataTable
        :items="orders"
        :fields="fields"
        items-per-page-select
        :items-per-page="5"
        hover
        pagination
      >
        <template #show_details="{item, index}">
          <td class="py-2">
            <CButton
              color="primary"
              class="btn--primary"
              variant="outline"
              square
              size="sm"
              @click="toggleDetails(item, index)"
            >
              {{ Boolean(item._toggled) ? "Ẩn" : "Chi tiết" }}
            </CButton>
          </td>
        </template>
        <template #details="{item}">
          <CCollapse
            :show="Boolean(item._toggled)"
            :duration="collapseDuration"
          >
            <table width="100%">
              <thead>
                <tr>
                  <th>Mã sản phẩm </th>
                  <th>Tên Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody class="orderProductDetail">
                <tr v-for="(product, index) in item.products" :key="index">
                  <td>
                    {{product.productId}}
                  </td>
                  <td>
                    {{ product.productName }}
                  </td>
                  <td>
                    {{ product.quantity }}
                  </td>
                  <td>
                    {{ product.productPrice }}
                  </td>
                  <td>
                    {{ product.productPrice * product.quantity }}
                  </td>
                </tr>
              </tbody>
            </table>
          </CCollapse>
        </template>
      </CDataTable>
    </CCardBody>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      collapseDuration: 0,
      fields: [
        {
          key: "orderId",
          _style: "min-width:50px",
          label: "Mã đơn hàng"
        },
        {
          key: "firstName",
          _style: "min-width:50px",
          label: "Họ"
        },
        {
          key: "lastName",
          _style: "min-width:50px",
          label: "Tên"
        },

        // {
        //   key: "newsDescription",
        //   _style: "min-width:120px",
        //   label: "Tên công ty"
        // },
        // {
        //   key: "newsHighlight",
        //   _style: "min-width:100px",
        //   label: "Quốc gia"
        // },
        {
          key: "address",
          _style: "min-width:200px",
          label: "Địa chỉ"
        },
        // {
        //   key: "postOfficeCode",
        //   _style: "min-width:120px",
        //   label: "Mã bưu điện"
        // },
        // {
        //   key: "city",
        //   _style: "min-width:140px",
        //   label: "Tỉnh / Thành phố"
        // },
        {
          key: "phoneNumber",
          _style: "min-width:150px",
          label: "Số điện thoại"
        },
        {
          key: "email",
          _style: "min-width:150px",
          label: "Email"
        },
        {
          key: "note",
          _style: "min-width:150px",
          label: "Ghi chú"
        },
        {
          key: "createdDate",
          _style: "min-width:150px",
          label: "Ngày đặt hàng"
        },
        {
          key: "show_details",
          label: "",
          _style: "width:1%",
          sorter: false,
          filter: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters("orders", { orders: "getOrders" })
  },

  methods: {
    ...mapActions("orders", { loadData: "getDetailOrders" }),
    toggleDetails(item, index) {
      this.$set(this.orders[index], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    }
  },
  async created() {
    await this.loadData();
  }
};
</script>

<style lang="scss" scoped>
.orderProductDetail {
  background: #00000029;
}
</style>
