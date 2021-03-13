<template>
  <div class="menus">
    <ul class="menu">
      <li>
        <router-link to="/">Trang chủ</router-link>
      </li>
      <li>
        <router-link to="/about">Giới thiệu</router-link>
      </li>
      <li>
        <router-link to="/product"
          >Sản phẩm <i class="fas fa-chevron-down"></i
        ></router-link>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <router-link :to="category.link">
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/news">Tin tức</router-link>
      </li>
      <li>
        <router-link to="đâs">Video</router-link>
      </li>
      <li>
        <router-link to="đâs">Liên hệ</router-link>
      </li>
    </ul>
    <div class="cart">
      <router-link to="cart">
        <i class="fas fa-shopping-cart"></i>
        <span>{{ total }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: "1",
          name: "PC Đồ họa - workstation",
          link: "r"
        },
        {
          id: "2",
          name: "PC Đồ họa - workstation",
          link: "ewq"
        },
        {
          id: "3",
          name: "PC Đồ họa - workstation",
          link: "re"
        },
        {
          id: "4",
          name: "PC Đồ họa - workstation",
          link: "fdfd"
        },
        {
          id: "5",
          name: "PC Đồ họa - workstation",
          link: "sa"
        },
        {
          id: "6",
          name: "PC Đồ họa - workstation",
          link: "vc"
        },
        {
          id: "7",
          name: "PC Đồ họa - workstation",
          link: "zzz"
        },
        {
          id: "8",
          name: "PC Đồ họa - workstation",
          link: "dqe"
        }
      ],
      total: 2
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.menus {
  display: flex;
  justify-content: space-between;
  .menu {
    height: 50px;
    .router-link-exact-active {
      background-color: red;
      color: #fff;
    }

    li {
      display: inline-block;
      position: relative;
      &:hover ul {
        display: block;
      }
      ul {
        position: absolute;
        display: none;
        z-index: 9;
        background-color: #fff;
        li {
          a {
            width: 250px;
            border: 1px solid #e5e5e5;
            padding: 10px 15px;
            color: rgba(102, 102, 102, 0.85);
            &:hover {
              background-color: #fff;
              color: rgba(17, 17, 17, 0.85);
            }
          }
        }
      }
    }
  }
}
.menu > li {
  a {
    padding: 15px 20px;
    display: block;
    color: $color-black;
    font-weight: 700;
    &:hover {
      background-color: red;
      color: #fff;
    }
    i {
      position: relative;
      left: 2px;
      font-size: 12px;
    }
  }
}
.cart {
  a {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
    border: 1px solid rgb(145, 145, 145);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: $color-red;
    background-color: #fff;
    position: relative;
    span {
      color: #fff;
      position: absolute;
      font-family: Barlow-Bold;
      font-size: 18px;
      top: -5px;
      right: -5px;
      background-color: $color-red;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>
