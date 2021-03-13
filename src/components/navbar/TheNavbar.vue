<template>
  <div class="root">
    <div class="container">
      <div class="row">
        <div class="col-md-3 pr-0">
          <the-sidebar />
        </div>
        <div class="col-md-9 pl-0">
          <the-menu />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMenu from "./TheMenu.vue";
import TheSidebar from "./TheSidebar.vue";
export default {
  components: { TheSidebar, TheMenu }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.root {
  border-bottom: 2px solid $color-red;
}
</style>
