<template>
  <CCardBody>
    <CButton
      @click="$emit('addData')"
      class="btn--success"
      color="Success"
      variant="outline"
      size="lg"
      >Thêm mới
    </CButton>
    <CDataTable
      :items="items"
      :fields="fields"
      column-filter
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
    >
      <template #status="{item}">
        <td>
          <CBadge class="status" :color="getBadge(item.status)">
            {{ getStatus(item[status]) }}
          </CBadge>
        </td>
      </template>
      <template #show_details="{item, index}">
        <td class="py-2">
          <CButton
            color="primary"
            class="btn--primary"
            variant="outline"
            square
            size="sm"
            @click="toggleDetails(item, index)"
          >
            {{ Boolean(item._toggled) ? "Ẩn" : "Chi tiết" }}
          </CButton>
        </td>
      </template>
      <template #details="{item}" v-if="imageField">
        <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
          <CCardBody>
            <CMedia
              :aside-image-props="{
                height: 180,
                width: 150,
                src: require(`../../../assets/images/${item[imageField]}`)
              }"
            >
              <h5>
                {{ item[name] }}
              </h5>
              <p class="text-muted" v-if="item.createdDate">
                Tạo ngày : {{ item.createdDate }}
              </p>
              <CButton
                size="sm"
                color="info"
                class=""
                @click="updateData(item[id])"
              >
                Sửa
              </CButton>
              <CButton
                size="sm"
                color="danger"
                class="ml-1"
                @click="removeData(item[id])"
              >
                Xóa
              </CButton>
            </CMedia>
          </CCardBody>
        </CCollapse>
      </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
export default {
  name: "AdvancedTables",
  props: [
    "fields",
    "items",
    "id",
    "name",
    "createDate",
    "imageField",
    "status"
  ],
  data() {
    return {
      collapseDuration: 0
    };
  },
  methods: {
    getBadge(status) {
      switch (status) {
        case 1:
          return "success";
        case 0:
          return "secondary";
      }
    },
    toggleDetails(item, index) {
      this.$set(this.items[index], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
    getStatus(status) {
      switch (status) {
        case true:
          return "Kích hoạt";
        case false:
          return "Ngừng kích hoạt";
      }
    },
    removeData(id) {
      this.$emit("removeData", id);
    },
    updateData(id) {
      this.$emit("updateData", id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
