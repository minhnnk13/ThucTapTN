<template>
  <div>
    <the-grid @addData="openDialog" />
    <div class="dialog" v-if="isDialog">
      <h1 class="title">Tin tức</h1>
      <CRow>
        <CCol cols="1">
          <CButtonClose @click="closeDialog" buttonClasses="close" />
        </CCol>
      </CRow>
      <div class="dialog-content">
        <CRow>
          <CCol sm="12">
            <CInput label="Tiêu đề tin" />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput label="Hình ảnh" type="file" />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput label="Mô tả" />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label>Nội dung</label>
            <ckeditor :editor="editor" v-model="editorData"></ckeditor>
          </CCol>
        </CRow>
      </div>
      <CRow>
        <CCol sm="6">
          <CInputCheckbox label="Nổi bật" />
        </CCol>
        <CCol sm="6">
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  components: { TheGrid },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      isDialog: false
    };
  },
  computed: {
    ...mapGetters("news", { news: "getNews" })
  },
  methods: {
    ...mapActions("news", { loadData: "loadData" }),
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
