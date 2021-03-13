<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img height="130px" src="@/assets/images/logo.png" alt="" />
        </div>
        <div class="col-md-6 f-center p-0 ">
          <div class="search ">
            <base-input placeholder="Tìm kiếm sản phẩm" class="input-search" />
            <base-button class="btn-search">
              <i class="fas fa-search" slot="icon-button"></i>
            </base-button>
          </div>
        </div>
        <div class="col-md-3 f-center">
          <div class="contact">
            <div class="hotline">
              <a href="tel: 0988317051">Hotline: 0988317051</a>
            </div>
            <div class="address">
              Số 96 Ngõ 136 Đường Cầu Diễn
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./control/BaseButton.vue";
import BaseInput from "./control/BaseInput";
export default {
  components: { BaseInput, BaseButton }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/abstracts/variable.scss";
.header {
  height: 135px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 5px;
  .search {
    display: flex;
    width: 100%;
    .btn-search {
      width: 39px;
      height: 39px;
      background-color: $color-red;
      i {
        color: #fff;
        font-size: 22px;
      }
    }
    .input-search {
      width: 100%;
    }
  }
  .contact {
    .hotline {
      a {
        display: block;
        text-align: center;
        padding: 5px;
        background-color: $color-red;
        color: #fff;
        border-radius: 30px;
        font-family: Barlow-Bold;
      }
    }
    .address {
      font-family: Barlow-Bold;
    }
  }
}
</style>
