<template>
  <div class="news container">
    <div class="news__page">TIN TỨC</div>
    <div class="news__title">
      {{ news.newsTitle }}
    </div>
    <div class="news__createdDate">
      POSTED ON <span>{{ getDate }}</span>
    </div>
    <div class="content" v-html="news.newsContent"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapGetters("news", { news: "getNew" }),
    getDate() {
      let createdDate = this.news.createdDate;
      let [month, date, yearh] = new Date(createdDate)
        .toLocaleDateString("en-US")
        .split("/");
      return date + "/" + month + "/" + yearh;
    }
  },
  methods: {
    ...mapActions("news", { loadData: "loadDataById" })
  },
  created() {
    this.loadData(this.id);
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.news {
  padding-top: 24px;
  &__page {
    color: $color-red;
    font-family: Barlow-Bold;
    padding: 10px 0;
  }
  &__title {
    font-family: Barlow-Bold;
    font-size: 24px;
    margin-bottom: 10px;
  }
  &__createdDate {
    margin-bottom: 30px;
    span {
      color: $color-red;
    }
  }
}
</style>
