<template>
  <div class="news">
    <div class="title">
      <h1>Tin tức nổi bật</h1>
    </div>
    <div class="news__content">
      <div class="news__content__left">
        <div v-for="item in listNews2" :key="item.newsId" class="item">
          <router-link to="đá">
            <div class="box-thumbnail">
              <div class="thumbnail-lazy">
                <img
                  :src="require(`../../assets/images/${item.newsImage}`)"
                  alt=""
                />
              </div>
            </div>
            <div class="title-name">
              {{ item.newsTitle }}
            </div>
          </router-link>
        </div>
      </div>
      <div class="news__content__right">
        <h2>Tin được xem nhiều nhất</h2>
        <div v-for="item in listNews4" :key="item.newsId" class="item">
          <router-link to="đá">
            <div class="box-thumbnail">
              <div class="thumbnail-lazy">
                <img
                  :src="require(`../../assets/images/${item.newsImage}`)"
                  alt=""
                />
              </div>
            </div>
            <div class="infor">
              <div class="title-name">
                {{ item.newsTitle }}
              </div>
              <div class="create-date">
                {{ item.createDate }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          newsId: 1,
          newsTitle: "Mạnh Hùng Computer tặng quà cực khủng - Mua 1 tặng 5",
          newsImage: "news.jpg",
          createDate: "30/12/2020"
        },
        {
          newsId: 2,
          newsTitle: "Mạnh Hùng Computer tặng quà cực khủng - Mua 1 tặng 5",
          newsImage: "news.jpg",
          createDate: "30/12/2020"
        },
        {
          newsId: 3,
          newsTitle: "Mạnh Hùng Computer tặng quà cực khủng - Mua 1 tặng 5",
          newsImage: "news.jpg",
          createDate: "30/12/2020"
        },
        {
          newsId: 4,
          newsTitle: "Mạnh Hùng Computer tặng quà cực khủng - Mua 1 tặng 5",
          newsImage: "news.jpg",
          createDate: "30/12/2020"
        },
        {
          newsId: 5,
          newsTitle: "Mạnh Hùng Computer tặng quà cực khủng - Mua 1 tặng 5",
          newsImage: "news.jpg",
          createDate: "30/12/2020"
        }
      ]
    };
  },
  computed: {
    listNews2() {
      return this.news.slice(0, 2);
    },
    listNews4() {
      return this.news.slice(0, 4);
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.news {
  .title {
    color: $color-red-brown;
    position: relative;
    text-align: center;
    margin: 30px 0;
    font-family: Barlow-Bold;
    text-transform: uppercase;
    font-size: 12px;
    &::before {
      content: "";
      position: absolute;
      width: 50px;
      height: 3px;
      background-color: #000;
      bottom: -10px;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    &__left {
      width: 48%;

      .box-thumbnail {
        padding-top: 65%;
      }
      .item {
        position: relative;
        margin-bottom: 20px;
        a {
          position: relative;
          display: block;
          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #000;
            z-index: 2;
            opacity: 0.2;
          }
        }
        .title-name {
          position: absolute;
          bottom: 0;
          z-index: 3;
          text-align: center;
          color: #fff;
          font-family: Impact;
          padding: 5px 15px;
          font-size: 16px;
          background-color: #00000096;
        }
      }
    }
    &__right {
      width: 48%;
      h2 {
        font-size: 16px;
        font-family: Barlow-Bold;
        color: #000;
        font-weight: 700;
        text-transform: uppercase;
        padding: 5px 0;
        border: 1px solid #ccc;
        border-left: 0;
        border-right: 0;
        margin-bottom: 10px;
      }
      .item {
        height: 100px;
        a {
          display: flex;
          justify-content: space-between;
          .box-thumbnail {
            padding-top: 31%;
            width: 30%;
          }
        }
        .infor {
          font-weight: 700;
          width: 63%;
          color: #000;
          .create-date {
            font-weight: 300;
            opacity: 0.8;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
