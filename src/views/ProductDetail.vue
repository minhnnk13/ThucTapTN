<template>
  <div class="product-detail">
    <div class="product">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-6">
                <div class="product__image">
                  <div class="box-thumbnail">
                    <div class="thumbnail-lazy">
                      <img
                        :src="
                          require(`../assets/images/${product.productImage}`)
                        "
                      />
                    </div>
                  </div>
                  <div class="discount">{{ product.productDiscount }}%</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="product__name">
                  {{ product.productName }}
                </div>
                <div class="product__price">
                  <div class="old-price">
                    {{ product.productOldPrice }} <span>đ</span>
                  </div>
                  <div class="price">
                    {{ product.productPrice }} <span>đ</span>
                  </div>
                </div>
                <div class="product__feature">
                  <ul>
                    <li>Cúy đẹp trai</li>
                    <li>Cúy đẹp trai</li>
                    <li>Cúy đẹp trai</li>
                    <li>Cúy đẹp trai</li>
                  </ul>
                </div>
                <div class="contact">
                  <a
                    class="btn"
                    href="https://www.messenger.com/t/100005212953356"
                  >
                    Chat Facebook
                  </a>
                  <a href="tel:0988317051" class="btn btn--green">
                    Gọi: 0988317051
                  </a>
                </div>
                <div class="amount">
                  <div class="count">
                    <div @click="decreCount">-</div>
                    <input v-model="count" type="number" min="1" />
                    <div @click="count += 1">+</div>
                  </div>
                  <div class="btn btn--add">
                    Thêm vào giỏ hàng
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <related-products :title="'Máy tính'" />
          </div>
        </div>
      </div>
    </div>
    <div class="infor">
      <div class="container">
        <tabs>
          <tab name="Mô tả">
            Mạnh Hùng Computer – đơn vị cung cấp PC uy tín tại Hà Nội Ngân sách
            xung quanh 25tr đồng. Ở phân khúc 25 – 30tr ta sẽ vẫn theo 2 hướng
            build từ Core i7 + Core i9 và Ryzen 9 nhưng có nâng cấp lên cao hơn
            ở RAM + Card đồ họa VGA. Vẫn như mình nói ở trên, nếu các bạn theo
            hướng 2D làm Render Edit Video chỉnh sửa ảnh thì chọn Core i7 ,Core
            i9. Còn theo hướng 3D render thì chọn Ryzen 9. * QUÝ KHÁCH CÓ THỂ
            NÂNG CẤP CẤU HÌNH TÙY Ý – Khuyến mại thêm: Giảm 5% mua kèm Gaming
            Gear : Link Gear – Khuyến mại thêm: Giảm 4% mua kèm Màn hình : Link
            Màn hình Workstation (máy trạm) là những máy tính chuyên dụng có cấu
            hình mạnh và độ ổn định cao được sử dụng trong các lĩnh vực đồ họa,
            render video, kiến trúc, dựng phim, xử lý hỉnh ảnh…Dòng Workstation
            có hiệu năng vượt xa so với các desktop thường về nhiều mặt. Ưu điểm
            của Workstation Đa nhiệm và hiệu năng: Các PC Workstation thường
            được trang bị cấu hình cao để đảm nhiệm xử lý đồ họa, khối lượng
            tính toán lớn, xử lý các chương trình project nặng kèm theo một
            không gian lưu trữ dữ liệu rộng lớn và truy xuất nhanh chóng. Thiết
            kế Chuyên Nghiệp: Workstation được thiết kế hướng đến các ứng dụng
            chuyên biệt, luôn được kiểm tra nghiêm ngặt, đảm bảo luôn mang lại
            một kết hợp hoàn hảo nhất giữa phần cứng và phần mềm. Độ tin cậy
            cao: Được trang bị những linh kiện cao cấp nhất như bộ nhớ có khả
            năng kiểm tra lỗi ECC, nguồn công suất lớn, hệ thống tản nhiệt hiệu
            quả cao nhằm đảm bảo tính ổn định khi máy tính hoạt động liên tục
            trong thời gian dài. Nâng Cấp: Việc tháo lắp và nâng cấp trên dòng
            Workstation thực hiện dễ dàng và hoàn toàn nhanh chóng bằng tay
            không. Chạy 24/24 không lo lỗi lầm, nóng máy, giảm hiệu suất làm
            việc. Nhược điểm Workstation Giá thành khá cao: Workstation được bán
            ra với giá còn khá cao, nhưng hiệu quả công việc nó mang lại rất lơn
            vì thế đây không phải vấn đề để quan tâm nữa. Với nhu cầu làm các
            phần mềm 3D và Render như 3dsmax Sketchup – Vray, Corona , Maya,
            Cinema4D… ta sẽ lựa chọn nền tảng AMD Ryzen 7 3700X / Ryzen 9 3900X
            để có lợi về số nhân xử lý lên tới 8 nhân 16 luồng Quý khách lưu ý:
            Về giá linh kiện có thể thay đổi liên tục, lúc lên, lúc xuống, nên
            chúng tôi sẽ chốt với quý khách tại thời điểm, khi mà quý khách lấy
            bộ máy tính. Đặc Biệt : Mạnh Hùng Computer nhận mua bán trao đổi
            nâng cấp cấu hình cũ lấy mới – Thấp lên cao . Chi tiết vui lòng gọi
            hotline : 0984405088 hoặc chát trực tiếp trên cửa sổ Subiz. MÃ SẢN
            PHẨM TÊN SẢN PHẨM BẢO HÀNH CPU CPU AMD Ryzen 5 5600X (3.7GHz Boost
            4.6GHz | 6 Nhân / 12 Luồng | 32MB Cache | PCIe 4.0) 36 THÁNG
            MAINBOARD Gigabyte B550M AORUS PRO LỰA CHỌN SỐ 1 CHO DÂN THIẾT KẾ ĐỒ
            HỌA 36 THÁNG RAM Kingmax Zeus Bus 3000Mhz – 16GB Kẹp tản nhiệt nhôm.
            36 THÁNG VGA Gigabyte RTX 2060 Supper – 8G – D6 Hỗ trợ đồ họa nặng
            rất tốt 36 THÁNG SSD M2 NVME 256GB Tốc độ đọc/ghi : 1950MB/s –
            1200MB/s 36 THÁNG NGUỒN Nguồn Máy Tính Cooler Master MWE 750 BRONZE
            V2 36 THÁNG CASE Vỏ case SAMA 3301 Kèm 3 FAN RGB 12 THÁNG TẢN NHIỆT
            Tản CPU Jonsbo CR-1000 RGB 12 THÁNG Hướng dẫn đặt hàng Online Quý
            khách chuyển khoản vào số tài khoản ngân hàng – Hoặc thanh toán tiền
            mặt sau khi nhận hàng. Có hỗ trợ quẹt thẻ các ngân hàng. Chủ Tài
            Khoản: Đặng Văn Hùng. Số tài khoản: 0711.000.232.714. Tại Ngân Hàng
            Vietcombank – CN Thanh Xuân Số tài khoản: 1058.6983.0254. Tại Ngân
            Hàng Viettinbank – CN Thanh Xuân Giảm ngay 200K khi khách hàng qua
            trực tiếp cửa hàng hoặc chuyển khoản cọc trước tiền máy. Mọi thông
            tin thắc mắc xin quý khách vui lòng liên hệ tới hotline hỗ trợ
            0941.50.4444 để được giải đáp chi tiết. Quý khách hàng nào phù hợp
            để dùng PC Workstation AMD Ryzen 5 5600X/16GB/ RTX 2060Supper – 8GB
            ✅ Khách hàng là học sinh, sinh viên, kế toán, thu ngân, cửa hàng
            bán lẻ. ✅ Khách hàng là tín đồ Mê Game : PUBG, FIFA, LOL, CF, GTA
            …Game nhập vai. ✅ Khách hàng là nhà thiết kế ,Render Video :
            Photoshop, Prime, 3D Max, Autocad, AI…Vray, Revit ✅ Khách hàng là
            trường học, cơ quan, công ty, doanh nghiệp. Các chính sách & cam kết
            khi quý khách mua hàng tại Mạnh Hùng Computer ✅ Sản phẩm mới, chính
            hãng 100% ✅ Bảo hành 36 tháng ✅ Đổi mới khi lỗi trong 30 ngày đầu
            ✅ Hỗ trợ cho khách hàng mượn linh kiện khi đợi bảo hành. ✅ Miễn
            phí phần mềm, vệ sinh, bảo dưỡng trọn đời. ✅ Hỗ trợ 20% giá linh
            kiện thay thế sau khi hết bảo hành nếu lỗi. ✅ Bảo hành tận nơi nội
            thành, nếu khách hàng là doanh nghiệp ——————★——————-
          </tab>
          <tab name="Thông tin bảo hành">
            ★ Đổi mới 100% các sản phẩm phẩm bị lỗi do nhà sản xuất trong 30
            ngày đầu tiên (tính từ thời điểm mua hàng) áp dụng đối với các sản
            phẩm: - Gaming Gear: Bàn phím, chuột, tai nghe. - Linh kiện máy
            tính: CPU, RAM, SSD, HDD, FAN, Tản nhiệt, PSU, Thiết bị mạng, NUC. ★
            Đổi mới 100% các sản phẩm phẩm bị lỗi do nhà sản xuất trong 7 ngày
            đầu tiên (tính từ thời điểm mua hàng) áp dụng đối với các sản phẩm:
            - Laptop - Màn hình ★ Điều kiện sản phẩm được áp dụng đổi mới 100%:
            - Sản phẩm có tem niêm phong (seal) còn nguyên vẹn. - Sản phẩm còn
            đầy đủ hộp, sách và phụ kiện. - Sản phẩm không trầy xước, cấn móp.
            Đối với các sản phẩm có màn hình thì tấm nền màn hình nguyên vẹn
            không trầy.
          </tab>
        </tabs>
      </div>
    </div>
    <div class="cart">
      <div class="title">GIỎ HÀNG</div>
      <div class="list-item">
        <div class="item" v-for="item in cart" :key="item.productId">
          <router-link class="product" to="">
            <div class="product-image">
              <div class="box-thumbnail">
                <div class="thumbnail-lazy">
                  <img
                    :src="require(`../assets/images/${item.productImage}`)"
                  />
                </div>
              </div>
            </div>
            <div class="detail">
              <div class="product-name">
                {{ item.productName }}
              </div>
              <div class="content">
                <span class="count">{{ item.count }} x </span>
                {{ item.productPrice }}
                <span style="text-decoration: underline">đ</span>
              </div>
            </div>
          </router-link>
          <div class="remove">
            <i class="far fa-times-circle"></i>
          </div>
        </div>
      </div>
      <div class="total">
        Tổng cộng: <span class="money">76.123.123 </span> <span>đ</span>
      </div>
      <div class="close">
        <i class="fas fa-times"></i>
      </div>
      <div class="m-b-10">
        <router-link to="" class="btn btn--add w-100">Xem giỏ hàng</router-link>
      </div>
      <div>
        <router-link to="" class="btn btn--add w-100">Thanh toán</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RelatedProducts from "../components/related/RelatedProducts.vue";
export default {
  components: { RelatedProducts },
  data() {
    return {
      product: {
        productId: 1,
        productImage: "product.jpg",
        productName: "Quý đẹp trai, Quý rất đẹp trai",
        productOldPrice: 2988000,
        productPrice: 2700000,
        productDiscount: 10
      },
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
        }
      ],
      count: 1
    };
  },
  methods: {
    decreCount() {
      if (this.count > 0) {
        this.count -= 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.product-detail {
  margin-top: 40px;
  .product {
    .col-md-9 {
      .row {
        padding-bottom: 40px;
        border-bottom: 1px solid #ccc;
      }
    }
    &__image {
      position: relative;
      .box-thumbnail {
        padding-top: 80%;
      }
      .discount {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        width: 50px;
        height: 50px;
        background-color: $color-red;
        color: #fff;
        font-family: Barlow-Bold;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
      }
    }
    &__name {
      font-size: 26px;
      font-family: Barlow-Bold;
      color: #000;
    }
    &__price {
      color: $color-red;
      font-family: Barlow-SBold;
      display: flex;
      font-size: 20px;
      margin: 10px 0;
      span {
        text-decoration: underline;
      }
      .old-price {
        text-decoration: line-through;
        opacity: 0.7;
        margin-right: 20px;
      }
    }
    &__feature {
      margin-left: 30px;
      margin-bottom: 20px;
      ul {
        li {
          list-style-type: disc;
        }
      }
    }
    .contact {
      display: flex;
      justify-content: space-around;
      a {
        font-size: 18px;
      }
    }
    .amount {
      display: flex;
      align-items: center;
      margin-top: 20px;
      .count {
        display: flex;
        margin-right: 30px;
        input {
          width: 40px;
          padding-left: 12px;
          font-size: 16px;
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
  }
  .infor {
    .tabs-component {
      color: #000;
      .tabs-component-tabs {
        color: #000;

        .tabs-component-tab {
          color: #000;

          display: inline-block;
        }
      }
    }
  }
  .cart {
    width: 300px;
    position: fixed;
    background-color: #fff;
    right: 0;
    top: 0;
    height: 100vh;

    z-index: 99;
    padding: 40px 20px;
    .title {
      text-align: center;
      font-family: Barlow-Bold;
      font-size: 20px;
      color: #000;
    }
    .list-item {
      max-height: 480px;
      overflow: auto;
      .item {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        .product {
          width: 85%;
          position: relative;

          padding: 20px 0;
          display: flex;
          justify-content: space-between;
          .product-image {
            width: 30%;
            .box-thumbnail {
              padding-top: 110%;
            }
          }
          .detail {
            width: 55%;
            color: $color-red;
            font-family: Barlow-SBold;
            .content {
              margin-top: 10px;
              opacity: 0.8;
              .count {
                color: $color-black;
              }
            }
          }
          &:hover .product-name {
            color: $color-black;
          }
        }
        .remove {
          padding-top: 20px;
          width: 10%;
          z-index: 999;
          color: $color-black;
          opacity: 0.5;
          font-size: 20px;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
    .total {
      font-family: Barlow-Bold;
      text-align: center;
      font-size: 18px;
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
      .money {
        color: $color-red;
        text-decoration: none;
      }
      span {
        color: $color-red;
        text-decoration: underline;
      }
    }
    .close {
      position: absolute;
      top: 20px;
      right: 10px;
      font-size: 28px;
      cursor: pointer;
    }
  }
}
</style>
