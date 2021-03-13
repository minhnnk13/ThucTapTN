<template>
  <div class="cart">
    <div class="container">
      <div class="row">
        <div class="col-md-7 products">
          <div class="row title mr-0">
            <div class="col-md-6">
              Sản phẩm
            </div>
            <div class="col-md-2">
              Giá
            </div>
            <div class="col-md-2">
              Số lượng
            </div>
            <div class="col-md-2 t-r">
              Tổng cộng
            </div>
          </div>
          <div class="list-item">
            <div
              class="row  item mr-0"
              v-for="item in cart"
              :key="item.productId"
            >
              <div class="col-md-6 product">
                <div class="remove">
                  <i class="far fa-times-circle"></i>
                </div>
                <router-link to="">
                  <div class="image">
                    <div class="box-thumbnail">
                      <div class="thumbnail-lazy">
                        <img
                          :src="
                            require(`../assets/images/${item.productImage}`)
                          "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="name">
                    {{ item.productName }}
                  </div>
                </router-link>
              </div>
              <div class="col-md-2 price mr-0">
                {{ item.productPrice }} <span> đ</span>
              </div>
              <div class="col-md-2 amount">
                <div class="count">
                  <div @click="decreCount(item)">-</div>
                  <input v-model="item.count" type="number" min="1" />
                  <div @click="item.count += 1">+</div>
                </div>
              </div>
              <div class="col-md-2 total mr-0">50.752.000 <span>đ</span></div>
            </div>
          </div>
          <router-link to="/products" class="back">
            <i class="fas fa-long-arrow-alt-left"></i> Tiếp tục xem sản phẩm
          </router-link>
        </div>
        <div class="col-md-5 amount-total">
          <div class="title">Tổng số lượng</div>
          <div class="total">
            Tổng cộng <span>51.234.567 <span>đ</span></span>
          </div>
          <div class="m-l-8">
            <router-link to="/pay" class="btn btn--add w-100 "
              >Tiến hành thanh toán
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [
        {
          productImage: "product.jpg",
          productName:
            "Bộ PC Gaming B360/ i3 9100F/RAM 8GB/ GTX 1050-2G/Màn Hình 24inch Cong Full Viền",
          count: 4,
          productPrice: 14000000
        },
        {
          productImage: "product.jpg",
          productName:
            "Bộ PC Gaming B360/ i3 9100F/RAM 8GB/ GTX 1050-2G/Màn Hình 24inch Cong Full Viền",
          count: 4,
          productPrice: 14000000
        },
        {
          productImage: "product.jpg",
          productName:
            "Bộ PC Gaming B360/ i3 9100F/RAM 8GB/ GTX 1050-2G/Màn Hình 24inch Cong Full Viền",
          count: 4,
          productPrice: 14000000
        },
        {
          productImage: "product.jpg",
          productName:
            "Bộ PC Gaming B360/ i3 9100F/RAM 8GB/ GTX 1050-2G/Màn Hình 24inch Cong Full Viền",
          count: 4,
          productPrice: 14000000
        },
        {
          productImage: "product.jpg",
          productName:
            "Bộ PC Gaming B360/ i3 9100F/RAM 8GB/ GTX 1050-2G/Màn Hình 24inch Cong Full Viền",
          count: 4,
          productPrice: 14000000
        }
      ]
    };
  },
  methods: {
    decreCount(item) {
      if (item.count > 0) {
        item.count -= 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";

.cart {
  padding-top: 20px;
  .title {
    font-family: Barlow-SBold;
    font-size: 16px;
    border-bottom: 3px solid #ccc;
    color: #000;
    padding: 5px 0;
    text-transform: uppercase;
  }
  .products {
    border-right: 1px solid #ccc;

    .list-item {
      max-height: 580px;
      overflow: auto;
      .item {
        border-bottom: 1px solid #ccc;
        padding: 20px 0 10px 0;
        .product {
          display: flex;
          justify-content: space-between;
          .remove {
            width: 10%;
            display: flex;
            align-items: center;
            opacity: 0.5;
            cursor: pointer;
            font-size: 24px;
            &:hover {
              opacity: 1;
            }
          }
          a {
            width: 85%;
            display: flex;
            justify-content: space-between;

            .image {
              width: 35%;
              .box-thumbnail {
                padding-top: 110%;
              }
            }
            .name {
              width: 60%;
              color: $color-red;
              font-family: Barlow-SBold;
            }
            &:hover .name {
              color: $color-black;
            }
          }
        }
        .price {
          display: flex;
          align-items: center;
          font-family: Barlow-SBold;
          color: $color-red;
          span {
            text-decoration: underline;
            margin-left: 3px;
          }
        }
        .amount {
          display: flex;
          align-items: center;
          .count {
            display: flex;
            margin-right: 30px;
            input {
              width: 40px;
              padding-left: 12px;
              font-size: 16px;
              height: 42px;
            }
            div {
              border: 1px solid #ccc;
              line-height: 40px;
              width: 30px;
              text-align: center;
              background-color: #f9f9f9;
              cursor: pointer;
            }
          }
        }
        .total {
          display: flex;
          align-items: center;
          color: $color-red;
          font-family: Barlow-SBold;
          span {
            text-decoration: underline;
            margin-left: 3px;
          }
        }
      }
    }
    .back {
      margin-top: 20px;
      border: 2px solid $color-red;
      display: inline-block;
      padding: 5px 20px;
      font-size: 16px;
      color: $color-red;
      font-family: Barlow-SBold;
      transition: all 0.5s;
      &:hover {
        background-color: $color-red;
        color: #fff;
      }
    }
  }
  .amount-total {
    .total {
      padding: 20px 0 10px 0px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-family: Barlow-SBold;
      span {
        color: $color-red;
        span {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
