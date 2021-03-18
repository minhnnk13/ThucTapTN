<template>
  <div class="app">
    <the-sidebar />
    <CWrapper>
      <the-header />
      <div class="c-body">
        <main class="main">
          <div class="container-fluid">
            <router-view :key="$route.path"></router-view>
          </div>
        </main>
      </div>
      <the-footer />
    </CWrapper>
    <!-- <the-header />
    <div class="app-body">
      <main class="main">
        <Breadcrumb :list="list" />
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <the-footer /> -->
  </div>
</template>

<script>
import nav from "../shared/sidebar-nav";
import TheHeader from "./TheHeader.vue";
import TheSidebar from "./TheSidebar.vue";
import TheFooter from "./TheFooter.vue";

export default {
  name: "full",
  components: {
    TheHeader,
    TheSidebar,
    TheFooter
  },
  data() {
    return {
      nav: nav.items,
      app_name: process.env.APP_NAME || "CoreUi"
    };
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched.filter(
        route => route.name || route.meta.label
      );
    }
  }
};
</script>
<style lang="scss" scoped></style>
