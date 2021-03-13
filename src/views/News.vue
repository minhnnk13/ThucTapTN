<template>
  <div class="news">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4" v-for="item in news" :key="item.newsId">
              <router-link to="" class="item">
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
                    {{ item.newsDate }}
                  </span>
                  <div class="month">Th{{ item.newsMonth }}</div>
                </div>
              </router-link>
            </div>
          </div>
          <paginate
            :pageCount="1"
            :container-class="'pagination'"
            :next-text="nextIcon"
            :prev-text="prevIcon"
            :page-class="'page-item'"
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
      news: [
        {
          newsId: 1,
          newsTitle: "Quý rất đẹp trai",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai"
        },
        {
          newsId: 2,
          newsTitle: "Quý rất đẹp trai",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai"
        },
        {
          newsId: 3,
          newsTitle: "Quý rất đẹp trai",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai"
        },
        {
          newsId: 4,
          newsTitle: "Quý rất đẹp trai",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai"
        },
        {
          newsId: 5,
          newsTitle: "Quý rất đẹp trai",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai"
        },
        {
          newsId: 6,
          newsTitle: "Quý rất đẹp trai",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai"
        },
        {
          newsId: 7,
          newsTitle: "Quý rất đẹp trai",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai"
        },
        {
          newsId: 8,
          newsTitle: "Quý rất đẹp trai",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai"
        },
        {
          newsId: 9,
          newsTitle: "Quý rất đẹp trai",
          newsImage: "news.jpg",
          newsDate: "30",
          newsMonth: "12",
          newsDescription:
            "Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai Quý rất đẹp trai"
        }
      ]
    };
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
