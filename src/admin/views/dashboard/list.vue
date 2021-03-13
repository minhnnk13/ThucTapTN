<template>
  <div class="animated fadeIn">
    <b-card title="Summary">
      <div v-if="items.length > 0">
        <div class="table-responsive">
          <b-table show-empty :items="items" :fields="fields" striped hover>
          </b-table>
        </div>
      </div>
      <loader v-else-if="onRequest" />
      <table-empty-data v-else :fields="fields" />
    </b-card>
  </div>
</template>

<script>
import TableEmptyData from "../../components/commons/table-empty-data";
import fields from "../../shared/fields/dashboard";

export default {
  components: { TableEmptyData },
  data() {
    return {
      items: [],
      fields: fields(),
      onRequest: false
    };
  }
};
</script>
