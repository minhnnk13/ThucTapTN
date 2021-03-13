<template>
  <CCardBody>
    <CDataTable
      :items="items"
      :fields="fields"
      column-filter
      table-filter
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
    >
      <template #status="{item}">
        <td>
          <CBadge class="status" :color="getBadge(item.status)">
            {{ getStatus(item.status) }}
          </CBadge>
        </td>
      </template>
      <template #show_details="{item, index}">
        <td class="py-2">
          <CButton
            color="primary"
            variant="outline"
            square
            size="sm"
            @click="toggleDetails(item, index)"
          >
            {{ Boolean(item._toggled) ? "Hide" : "Show" }}
          </CButton>
        </td>
      </template>
      <template #details="{item}">
        <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
          <CCardBody>
            <CMedia
              :aside-image-props="{
                height: 102,
                width: 20,
                src: 'https://picsum.photos/1024/480/?image=54'
              }"
            >
              <h4>
                {{ item.username }}
              </h4>
              <p class="text-muted">User since: {{ item.registered }}</p>
              <CButton size="sm" color="info" class="">
                User Settings
              </CButton>
              <CButton size="sm" color="danger" class="ml-1">
                Delete
              </CButton>
            </CMedia>
          </CCardBody>
        </CCollapse>
      </template>
    </CDataTable>
  </CCardBody>
</template>
<style lang="scss" scoped>
.status {
  cursor: pointer;
}
</style>
<script>
const items = [
  {
    username: "Samppa Nori",
    registered: "2012/01/01",
    role: "Member",
    status: 1
  },
  {
    username: "Estavan Lykos",
    registered: "2012/02/01",
    role: "Staff",
    status: 0
  }
];

const fields = [
  { key: "username", _style: "min-width:200px" },
  "registered",
  { key: "role", _style: "min-width:100px;" },
  { key: "status", _style: "min-width:100px;" },
  {
    key: "show_details",
    label: "",
    _style: "width:1%",
    sorter: false,
    filter: false
  }
];

export default {
  name: "AdvancedTables",
  data() {
    return {
      items: items.map((item, id) => {
        return { ...item, id };
      }),
      fields,
      details: [],
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
    toggleDetails(item) {
      this.$set(this.items[item.id], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
    getStatus(status) {
      switch (status) {
        case 1:
          return "Kích hoạt";
        case 0:
          return "Ngừng kích hoạt";
      }
    }
  }
};
</script>
