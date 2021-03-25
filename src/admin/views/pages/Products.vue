<template>
  <div>
    <the-grid
      :fields="fields"
      :items="products"
      :id="'productId'"
      :name="'productName'"
      :createDate="false"
      @addData="openDialog"
      :imageField="'productImage'"
      @removeData="removeProduct"
      @updateData="updateProduct"
    />

    <div class="dialog" v-if="isDialog">
      <h1 class="title">Sản phẩm</h1>
      <CRow>
        <CCol cols="1">
          <CButtonClose buttonClasses="close" @click="closeDialog" />
        </CCol>
      </CRow>
      <div class="dialog-content">
        <CRow>
          <CCol sm="6">
            <CInput label="Tên sản phẩm" v-model="currentProduct.productName" />
          </CCol>
          <CCol sm="6">
            <CInput
              label="Giá sản phẩm"
              type="number"
              v-model="currentProduct.productPrice"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="6">
            <CInput
              label="Giá cũ"
              type="number"
              v-model="currentProduct.productOldPrice"
            />
          </CCol>
          <CCol sm="6">
            <CInput
              label="Khuyễn mãi"
              type="number"
              v-model="currentProduct.productDiscount"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label for="Hình ảnh sản phẩm"></label>
            <input type="file" @change="choseImage" />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label>Tính năng chính</label>
            <ckeditor
              :editor="editor"
              v-model="currentProduct.productFeature"
            ></ckeditor>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label>Mô tả sản phẩm</label>
            <ckeditor
              :editor="editor"
              v-model="currentProduct.productDescription"
            ></ckeditor>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label>Thông tin bảo hành</label>
            <ckeditor
              :editor="editor"
              v-model="currentProduct.productGuarantee"
            ></ckeditor>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label>Thông tin khuyến mãi</label>
            <ckeditor
              :editor="editor"
              v-model="currentProduct.productPromotion"
            ></ckeditor>
          </CCol>
        </CRow>
      </div>
      <CRow>
        <CCol sm="6" style="display: flex">
          <label for="">Kích hoạt</label>
          <input type="checkbox" v-model="currentProduct.productStatus" />
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
  props: ["id"],
  components: { TheGrid },
  data() {
    return {
      editor: ClassicEditor,
      isDialog: false,
      fields: [
        {
          key: "productName",
          _style: "min-width:200px",
          label: "Tên sản phẩm"
        },
        {
          key: "productOldPrice",
          _style: "min-width:200px",
          label: "Giá cũ"
        },
        {
          key: "productPrice",
          _style: "min-width:200px",
          label: "Giá sản phẩm"
        },
        {
          key: "productDiscount",
          _style: "min-width:200px",
          label: "Giảm giá"
        },
        {
          key: "productStatus",
          _style: "min-width:200px",
          label: "Trạng thái"
        },
        {
          key: "show_details",
          label: "",
          _style: "width:1%",
          sorter: false,
          filter: false
        }
      ],
      currentProduct: {
        productName: "",
        productImage: "",
        productOldPrice: null,
        productPrice: null,
        productDiscount: null,
        productDescription: ``,
        productGuarantee: ``,
        productPromotion: ``,
        productFeature: ``,
        createdDate: "",
        productStatus: true,
        productCategoryId: this.id
      },
      isEditting: false
    };
  },
  computed: {
    ...mapGetters("products", {
      products: "getProducts",
      product: "getProduct"
    }),
    getCurrentDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      today = yyyy + "-" + mm + "-" + dd;
      return today;
    }
  },
  created() {
    this.loadProductsByCategory(this.id);
    this.currentProduct.createdDate = this.getCurrentDate;
  },
  methods: {
    convertToNumber() {
      this.currentProduct.productOldPrice = Number(
        this.currentProduct.productOldPrice
      );
      this.currentProduct.productPrice = Number(
        this.currentProduct.productPrice
      );
      this.currentProduct.productDiscount = Number(
        this.currentProduct.productDiscount
      );
      this.currentProduct.productCategoryId = Number(
        this.currentProduct.productCategoryId
      );
    },
    ...mapActions("products", {
      addProduct: "addProduct",
      loadProductsByCategory: "loadProductsByCategory",
      removeData: "removeProduct",
      editProduct: "editProduct",
      loadProductById: "loadDataById"
    }),
    openDialog() {
      this.isDialog = true;
    },
    closeDialog() {
      this.isDialog = false;
      this.isEditting = false;
      this.currentProduct = {
        productName: "",
        productImage: "",
        productOldPrice: null,
        productPrice: null,
        productDiscount: null,
        productDescription: ``,
        productGuarantee: ``,
        productPromotion: ``,
        productFeature: ``,
        createdDate: "",
        productStatus: true,
        productCategoryId: this.id
      };
    },
    choseImage(event) {
      this.currentProduct.productImage = event.target.files[0].name;
    },
    validate() {
      let status = false;
      if (
        !this.currentProduct.productName ||
        !this.currentProduct.productImage
      ) {
        status = false;
      }
      return status;
    },
    async saveData() {
      this.convertToNumber();

      if (this.isEditting) {
        await this.editProduct(this.currentProduct);
        console.log(this.isEditting);
      } else {
        await this.addProduct(this.currentProduct);
      }

      this.closeDialog();
      this.currentProduct.createdDate = this.getCurrentDate;
    },
    removeProduct(id) {
      let r = confirm("Bạn có chắc chắn muốn xóa!");
      if (r) {
        this.removeData(id);
      }
    },
    async updateProduct(id) {
      await this.loadProductById(id);
      this.isEditting = true;
      this.currentProduct = this.product;
      this.openDialog();
    }
  }
};
</script>

<style lang="scss" scoped>
.btn--success {
  margin-top: 30px;
}
</style>
