<template>
  <div class="banner">
    <VueSlickCarousel class="slide" v-bind="settings">
      <div v-for="slide in slides" :key="slide.image">
        <div class="box-thumbnail">
          <div class="thumbnail-lazy">
            <img
              width="100%"
              height="360px"
              :src="require(`./../assets/images/${slide.image}`)"
            />
          </div>
        </div>
      </div>
      <template #prevArrow>
        <div class="custom-arrow">
          <i class="fas fa-chevron-left"></i>
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      slides: [
        {
          image: "slide1.jpg",
          link: ""
        },
        {
          image: "slide2.jpg",
          link: ""
        },
        {
          image: "slide3.jpg",
          link: ""
        }
      ],
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.banner {
  .slide {
    &:hover {
      .custom-arrow {
        visibility: visible;
        opacity: 1;
      }
    }
    .box-thumbnail {
      padding-top: 44%;
    }
    .custom-arrow {
      width: 25px;
      z-index: 9;
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s;
      &:hover i {
        color: $color-red;
      }
      &::before {
        content: "";
      }
      i {
        font-size: 40px;
        color: #e2e2e2;
      }
    }
    .slick-prev {
      left: 25px;
    }
    .slick-next {
      right: 25px;
    }
  }
}
</style>
