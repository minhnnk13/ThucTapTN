<template>
  <div>
    <the-grid @addData="openDialog" />
    <div class="dialog" v-if="isDialog">
      <h1 class="title">Tham số</h1>
      <CRow>
        <CCol cols="1">
          <CButtonClose buttonClasses="close" @click="closeDialog" />
        </CCol>
      </CRow>
      <div class="dialog-content">
        <CRow>
          <CCol sm="12">
            <CInput label="Tên tham số" />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput label="Giá trị" />
          </CCol>
        </CRow>
      </div>
      <CRow>
        <CCol sm="12">
          <CButtonToolbar>
            <CButton color="danger" @click="closeDialog">Đóng</CButton>
            <CButton color="primary">Lưu</CButton>
          </CButtonToolbar>
        </CCol>
      </CRow>
    </div>
    <div class="overlay" v-if="isDialog"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheGrid from "../../components/commons/TheGrid.vue";

export default {
  components: { TheGrid },
  data() {
    return {
      editorData: "",
      isDialog: false
    };
  },
  computed: {
    ...mapGetters("params", { params: "getParams" })
  },
  methods: {
    ...mapActions("params", { loadData: "loadData" }),
    openDialog() {
      this.isDialog = true;
    },
    closeDialog() {
      this.isDialog = false;
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style lang="scss" scoped></style>
