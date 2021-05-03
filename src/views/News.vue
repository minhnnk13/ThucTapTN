<template>
  <div class="news">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4" v-for="item in news" :key="item.newsId">
              <router-link :to="'news/' + item.newsId" class="item">
                <div class="box-thumbnail">
                  <div class="thumbnail-lazy">
                    <img :src="require(`../assets/images/${item.newsImage}`)" />
                  </div>
                </div>
                <div class="title">
                  <div class="format-text">
                    {{ item.newsTitle }}
                  </div>
                </div>
                <div class="description">
                  <div class="format-text">
                    {{ item.newsDescription }}
                  </div>
                </div>
                <div class="created-date">
                  <span class="date">
                    {{ getDate(item.createdDate) }}
                  </span>
                  <div class="month">Th{{ getMonth(item.createdDate) }}</div>
                </div>
              </router-link>
            </div>
          </div>
          <paginate
            :pageCount="pageCount"
            :pageRange="pageRange"
            :margin-pages="2"
            :container-class="'pagination'"
            :next-text="nextIcon"
            :prev-text="prevIcon"
            :page-class="'page-item'"
            :click-handler="clickCallback"
          />
        </div>
        <div class="col-md-3">
          <related-products :title="'Sản phẩm mới'" />
          <related-news :title="'Bài viết mới'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import RelatedNews from "../components/related/RelatedNews.vue";
import RelatedProducts from "../components/related/RelatedProducts.vue";
export default {
  components: { RelatedProducts, RelatedNews },
  data() {
    return {
      nextIcon: `<i
            class="fas fa-chevron-right"
          ></i
          >`,
      prevIcon: `<i
            class="fas fa-chevron-left"
          ></i
          >`,
      pageRange: 3,
      news: [
        {
          newsId: 1,
          newsTitle: "Bảo hành hấp dẫn",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription: "Thông tin bảo hành trong vòng 2 năm"
        },
        {
          newsId: 2,
          newsTitle: "Hướng dẫn mua hàng trực tuyến",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Hướng dẫn mua hàng trực tuyến qua website www.manhnhatpc.com"
        },
        {
          newsId: 3,
          newsTitle: "Hướng dẫn mua trả góp",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription: "Hướng dẫn mua trả góp tại Mạnh Nhất Computer"
        },
        {
          newsId: 4,
          newsTitle: "Phương thức thanhh toán",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription: "Phương thức thanh toán onl hoặc mua trực tiếp"
        },
        {
          newsId: 5,
          newsTitle: "Chính sách giao hàng",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription: "Giao hàng tận nha cho khách hàng"
        },
        {
          newsId: 6,
          newsTitle: "Tặng quà khủng mua 1 tặng 5",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Mạnh Nhất Computer có khuyến mãi cực sốc mua 1 tặng 5"
        },
        {
          newsId: 7,
          newsTitle: "Chính sách giao hàng",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription: "Giao hàng tận nha cho khách hàng"
        },
        {
          newsTitle: "Chính sách giao hàng",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription: "Giao hàng tận nha cho khách hàng"
        },
        {
          newsId: 9,
          newsTitle: "Chính sách giao hàng",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription: "Giao hàng tận nha cho khách hàng"
        }
      ]
    };
  },
  computed: {
    // ...mapGetters("news", { news: "getNews" }),

    pageCount() {
      let pageCount;

      this.news.length % this.pageRange == 0
        ? (pageCount = this.news.length / this.pageRange)
        : (pageCount = Math.floor(this.news.length / this.pageRange) + 1);
      return pageCount;
    }
    // getDate(createdDate) {

    //   return createdDate;
    // }
  },
  methods: {
    ...mapActions("news", { loadData: "loadData" }),
    getDate(createdDate) {
      var date = new Date(createdDate).getDate();
      return date;
    },
    getMonth(createdDate) {
      var date = new Date(createdDate).getMonth() + 1;
      return date;
    },

    clickCallback(pageNum) {
      console.log(pageNum);
      let arr = [];

      let arrEnd = pageNum * this.pageRange - 1;

      arr = this.news.slice(arrEnd - this.pageRange - 1, arrEnd + 1);
      console.log(arr);
      return arr;
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.news {
  .item {
    margin-top: 40px;
    position: relative;
    display: block;
    color: $color-black;
    .box-thumbnail {
      padding-top: 60%;
    }
    .title {
      font-family: Barlow-Bold;
      font-size: 18px;
      .format-text {
        -webkit-line-clamp: 2;
        min-height: 54px;
      }
      margin: 5px 0;
    }
    .description {
      font-size: 15px;
      .format-text {
        -webkit-line-clamp: 2;
        min-height: 45px;
      }
    }
    .created-date {
      background-color: $color-red;
      color: #fff;
      font-family: Barlow-Bold;
      position: absolute;
      top: 30px;
      left: 0;
      z-index: 9;
      text-align: center;
      padding: 3px 10px;
      .date {
        font-size: 16px;
      }
      .month {
        font-size: 12px;
      }
    }
  }
}
</style>
