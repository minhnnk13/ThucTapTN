<template>
  <div>
    <the-grid
      @addData="openDialog"
      :fields="fields"
      :items="news"
      :id="'newsId'"
      :name="'newsTitle'"
      :createDate="false"
      :imageField="'newsImage'"
      @removeData="removeNews"
      @updateData="updateNews"
      :status="productStatus"
    />
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
            <CInput label="Tiêu đề tin" v-model="currentNews.newsTitle" />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label for="">Hình ảnh</label>
            <input type="file" @change="choseImage" />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput label="Mô tả" v-model="currentNews.newsDescription" />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label>Nội dung</label>
            <ckeditor
              :editor="editor"
              v-model="currentNews.newsContent"
            ></ckeditor>
          </CCol>
        </CRow>
      </div>
      <CRow>
        <CCol sm="6" style="display: flex">
          <label for="">Nổi bật</label>
          <input type="checkbox" v-model="currentNews.newsHighlight" />
        </CCol>
        <CCol sm="6">
          <CButtonToolbar>
            <CButton color="danger" @click="closeDialog">Đóng</CButton>
            <CButton color="primary" @click="saveData">Lưu</CButton>
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
      isDialog: false,
      fields: [
        {
          key: "newsTitle",
          _style: "min-width:200px",
          label: "Danh mục sản phẩm"
        },
        {
          key: "newsDescription",
          _style: "min-width:200px",
          label: "Mô tả"
        },
        {
          key: "newsHighlight",
          _style: "min-width:200px",
          label: "Nổi bật"
        },
        {
          key: "show_details",
          label: "",
          _style: "width:1%",
          sorter: false,
          filter: false
        }
      ],
      currentNews: {
        newsTitle: "",
        newsDescription: "",
        newsContent: "",
        newsHighlight: true,
        createdDate: "",
        newsImage: ""
      },
      isEditting: false
    };
  },
  computed: {
    ...mapGetters("news", { news: "getNews", new: "getNew" }),
    getCurrentDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      today = yyyy + "-" + mm + "-" + dd;
      return today;
    }
  },
  methods: {
    ...mapActions("news", {
      loadData: "loadData",
      addNews: "addNews",
      removeData: "removeNews",
      loadDataById: "loadDataById",
      editNews: "editNews"
    }),
    openDialog() {
      this.isDialog = true;
    },
    closeDialog() {
      this.isDialog = false;
      this.isEditting = false;
      this.currentNews = {
        newsTitle: "",
        newsDescription: "",
        newsContent: "",
        newsHighlight: true,
        createdDate: "",
        newsImage: ""
      };
    },
    choseImage(event) {
      this.currentNews.newsImage = event.target.files[0].name;
    },
    async saveData() {
      if (this.isEditting) {
        await this.editNews(this.currentNews);
      } else {
        await this.addNews(this.currentNews);
      }
      this.closeDialog();
      this.currentNews.createdDate = this.getCurrentDate;
    },
    removeNews(id) {
      let r = confirm("Bạn có chắc chắn muốn xóa!");
      if (r) {
        this.removeData(id);
      }
    },
    async updateNews(id) {
      await this.loadDataById(id);
      this.isEditting = true;
      this.currentNews = this.new;
      this.openDialog();
    }
  },
  created() {
    this.loadData();
    this.currentNews.createdDate = this.getCurrentDate;
  }
};
</script>

<style lang="scss" scoped></style>
