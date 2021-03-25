<template>
  <div class="pay-detail">
    <div class="container">
      <div class="text">Thêm thành công</div>
      <!-- <div class="row">
        <div class="col-md-7">
          <p>Trả tiền mặt khi giao hàng</p>
          <div class="title">Chi tiết đơn hàng</div>
          <div class="row">
            <div class="col-md-9">
              Sản phẩm
            </div>
            <div class="col-md-3 t-r">Tổng cổng</div>
          </div>
          <div class="row" v-for="product in products" :key="product.productId">
            <div class="col-md-9">
              {{ product.productName }} x {{ product.count }}
            </div>
            <div class="col-md-3 t-r">{{ product.productName }}</div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        orderId: 1,
        createdDate: "23/03/2021",
        note: "Giao trong hôm nay"
      }
      //
    };
  }
};
</script>

<style lang="scss" scoped>
.text {
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}
</style>
