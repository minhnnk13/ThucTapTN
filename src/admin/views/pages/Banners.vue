<template>
  <div>
    <the-grid
      @addData="openDialog"
      :fields="fields"
      :items="banners"
      :id="'bannerId'"
      :name="'bannerImage'"
      :createDate="false"
      :imageField="'bannerImage'"
    />
    <div class="dialog" v-if="isDialog">
      <h1 class="title">Banner</h1>
      <CRow>
        <CCol cols="1">
          <CButtonClose buttonClasses="close" @click="closeDialog" />
        </CCol>
      </CRow>
      <div class="dialog-content">
        <CRow>
          <CCol sm="12">
            <input type="file" @change="choseImage" />
          </CCol>
          <CCol sm="12">
            <CButtonToolbar>
              <CButton color="danger" @click="closeDialog">Đóng</CButton>
              <CButton color="primary" @click="addData">Lưu</CButton>
            </CButtonToolbar>
          </CCol>
        </CRow>
      </div>
    </div>
    <div class="overlay" v-if="isDialog"></div>
  </div>
</template>
<style lang="scss" scoped></style>
<script>
import { mapActions, mapGetters } from "vuex";
import TheGrid from "../../components/commons/TheGrid";
export default {
  components: {
    TheGrid
  },
  data() {
    return {
      isDialog: false,
      currentBanner: {
        bannerImage: null
      },
      fields: [
        {
          key: "bannerImage",
          _style: "min-width:200px",
          label: "Danh mục sản phẩm"
        },
        {
          key: "show_details",
          label: "",
          _style: "width:1%",
          sorter: false,
          filter: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters("banners", { banners: "getBanners" })
  },
  methods: {
    ...mapActions("banners", { loadData: "loadData", addBanner: "addBanner" }),
    openDialog() {
      this.isDialog = true;
    },
    closeDialog() {
      this.isDialog = false;
      this.currentBanner.bannerImage = null;
    },
    coppyfile() {
      const fs = require("fs");
      fs.writeFile("run.txt", 'console.log("ok"))', function() {
        console.log("save");
      });
    },
    choseImage(event) {
      this.currentBanner.bannerImage = event.target.files[0].name;
    },
    async addData() {
      await this.addBanner(this.currentBanner);
      this.closeDialog();
    }
  },
  created() {
    this.loadData();
  }
};
</script>
