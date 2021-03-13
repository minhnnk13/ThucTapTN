<template>
  <div class="app">
    <the-header />
    <the-navbar />
    <the-content />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from "../components/navbar/TheNavbar.vue";
import TheContent from "../components/TheContent.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader, TheNavbar, TheContent, TheFooter }
};
</script>

<style lang="scss" scoped></style>
