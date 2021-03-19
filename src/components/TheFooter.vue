<template>
  <div class="footer">
    <div class="menu">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="infor">
              <div class="content">
                <div class="logo">
                  <img width="150px" src="../assets/images/logo.png" alt="" />
                </div>
                <ul>
                  <li>
                    <i class="fas fa-map-marker-alt"></i> {{ param.address }}
                  </li>
                  <li>
                    <i class="fas fa-phone-alt"></i> {{ param.phoneNumber }}
                  </li>
                  <li><i class="fas fa-envelope"></i> {{ param.email }}</li>
                  <li><i class="fas fa-globe-asia"></i> {{ param.website }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <ul>
              <li>
                <router-link to="">
                  Trang chủ
                </router-link>
              </li>
              <li>
                <router-link to="">
                  Giới thiệu
                </router-link>
              </li>
              <li>
                <router-link to="">
                  sản phẩm
                </router-link>
              </li>
              <li>
                <router-link to="">
                  tin tức
                </router-link>
              </li>
              <li>
                <router-link to="">
                  liên hệ
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-3">
            <h1>Hỗ trợ khách hàng</h1>
            <ul>
              <li>
                <a href="">
                  Bảo hành và đổi trả hàng
                </a>
              </li>
              <li>
                <a href="">
                  Chính sách bán hàng
                </a>
              </li>
              <li>
                <a href="">
                  Chính sách giao hàng
                </a>
              </li>
              <li>
                <a href="">
                  Quy định & hình thức thành toán
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h1>Về Mạnh Nhất computer</h1>
            <ul>
              <li>
                <a href="">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="">
                  Báo chí nói về Mạnh Nhất computer
                </a>
              </li>
              <li>
                <a href="">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h1>Facebook</h1>
            <div
              class="fb-page"
              data-href="https://www.facebook.com/groups/j2team.community.girls"
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            ></div>
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
      param: {
        address: "Số 96 Ngõ 136 đường Cầu Diễn",
        phoneNumber: "0988317051",
        email: "chimsetrongmua@gmail.com",
        website: "www.namthanhcomputer.com"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/abstracts/variable.scss";
.footer {
  margin-top: 50px;
  .menu {
    background-color: $color-red-brown;
    .infor {
      position: relative;
      .content {
        position: absolute;
        z-index: 2;
        width: 100%;
        top: -20px;
        background-color: rgb(39, 39, 39);
        .logo {
          text-align: center;
          padding-top: 30px;
          padding-bottom: 5px;
          border-top: 3px solid $color-red;
          border-bottom: 1px solid #ccc;
        }
        ul {
          padding: 20px 15px;
          li {
            padding: 5px 0;
            display: inline-block;
            color: #fff;
          }
        }
      }
    }
    .col-md-9 {
      ul {
        li {
          display: inline-block;
          a {
            color: #fff;
            text-transform: uppercase;
            font-family: Barlow-Bold;
            font-size: 16px;
            padding: 40px 30px;
            display: block;
          }
        }
      }
    }
  }
  .block {
    background-color: rgb(51, 51, 51);
    color: #fff;
    padding: 30px 0;
    h1 {
      text-transform: uppercase;
      font-size: 20px;
    }
    ul {
      padding-left: 20px;
      padding-top: 20px;
      li {
        list-style-type: circle;
        a {
          color: #fff;
          padding: 5px 0;
          opacity: 0.8;
          display: block;
        }
      }
    }
  }
}
</style>
