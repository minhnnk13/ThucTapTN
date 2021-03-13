<template>
  <div class="sidebar">
    <div style="display: none">{{ currentRouteName }}</div>
    <ul class="category">
      <li>
        <i class="fas fa-bars"></i> Danh mục sản phẩm
        <ul v-category>
          <li v-for="category in categories" :key="category.id">
            <router-link :to="category.link">
              <img
                :src="require(`../../assets/images/${category.icon}`)"
                alt=""
              />
              {{ category.name }}
            </router-link>
          </li>
          <div class="overlay"></div>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  directives: {
    category: {
      update: (el, binding, vnode) => {
        console.log(vnode.context.currentRouteName);
        if (
          vnode.context.currentRouteName == "Home" ||
          vnode.context.currentRouteName == ""
        ) {
          el.style.display = "block";
        } else {
          el.style.display = "";
        }
      },
      bind: (el, binding, vnode) => {
        console.log(vnode.context.currentRouteName);
        if (
          vnode.context.currentRouteName == "Home" ||
          vnode.context.currentRouteName == ""
        ) {
          el.style.display = "block";
        } else {
          el.style.display = "";
        }
      }
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  mounted() {
    console.log(this.currentRouteName);
  },
  data() {
    return {
      categories: [
        {
          id: "1",
          icon: "ic_pc.png",
          name: "PC Đồ họa - workstation",
          link: "l"
        },
        {
          id: "2",
          icon: "ic_pc.png",
          name: "PC Đồ họa - workstation",
          link: "k"
        },
        {
          id: "3",
          icon: "ic_pc.png",
          name: "PC Đồ họa - workstation",
          link: "j"
        },
        {
          id: "4",
          icon: "ic_pc.png",
          name: "PC Đồ họa - workstation",
          link: "h"
        },
        {
          id: "5",
          icon: "ic_pc.png",
          name: "PC Đồ họa - workstation",
          link: "f"
        },
        {
          id: "6",
          icon: "ic_pc.png",
          name: "PC Đồ họa - workstation",
          link: "d"
        },
        {
          id: "7",
          icon: "ic_pc.png",
          name: "PC Đồ họa - workstation",
          link: ""
        },
        {
          id: "8",
          icon: "ic_pc.png",
          name: "PC Đồ họa - workstation",
          link: "a"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.sidebar {
  .category > li {
    padding: 12px 15px;
    background-color: $color-black;
    color: #fff;
    position: relative;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 4px solid $color-red;
    cursor: pointer;
    &:hover ul {
      display: block;
    }
    &:hover .overlay {
      display: block;
    }

    li {
      display: inline-block;
      width: 100%;
    }
    i {
      font-size: 20px;
      color: #fff;
      margin-right: 10px;
    }

    ul {
      display: none;
      position: absolute;
      top: 51px;
      left: 0;
      width: 100%;
      z-index: 9;
      background-color: #fff;
      li {
        a {
          color: $color-black;
          padding: 10px 15px;
          border: 1px solid #ccc;
          display: block;
          text-transform: uppercase;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
}
</style>
