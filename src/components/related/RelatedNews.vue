<template>
  <div class="related">
    <div class="related__news">
      <div class="related__title">
        {{ title }}
      </div>
      <div class="related__news__content">
        <router-link
          to=""
          class="news"
          v-for="news in listNews5"
          :key="news.newsId"
        >
          <div class="box-thumbnail">
            <div class="thumbnail-lazy">
              <img :src="require(`../../assets/images/${news.newsImage}`)" />
            </div>
          </div>
          <div class="content">
            <div class="product-name">
              <div class="format-text">
                {{ news.newsDescription }}
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  computed: {
    listNews5() {
      return this.news.slice(0, 5);
    }
  },
  data() {
    return {
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
.related {
  margin-top: 40px;
  &__title {
    background-color: $color-red;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    padding: 10px 15px;
    position: relative;
    top: -1px;
    width: 150px;
    text-transform: uppercase;
    &::before {
      content: "";
      position: absolute;
      background-image: url("../../assets/images/ic_title.png");
      background-position: center;
      right: -45px;
      top: -1px;
      background-size: contain;
      background-repeat: no-repeat;
      width: 50px;
      height: 45px;
    }
    &::after {
      content: "";
      background-color: $color-red;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 270px;
      height: 2px;
    }
  }
  &__products,
  &__news {
    &__content {
      .product,
      .news {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        .box-thumbnail {
          padding-top: 32%;
          width: 35%;
        }
        .content {
          width: 60%;
          .product-name {
            font-family: Barlow-SBold;
            color: $color-black;
            .fomat-text {
              -webkit-line-clamp: 3;
              min-height: 62px;
            }
          }
          .product-price {
            display: flex;
            justify-content: space-around;
            color: $color-red;
            font-weight: 700;
            span {
              text-decoration: underline;
            }
            .old-price {
              opacity: 0.7;
              text-decoration: line-through;
            }
          }
        }

        &:hover {
          .product-name {
            color: $color-red;
          }
        }
      }
    }
  }
  &__news {
    margin-top: 40px;
    .news {
      .box-thumbnail {
        padding-top: 25%;
        width: 25%;
      }
      .content {
        width: 70%;
      }
    }
  }
}
</style>
