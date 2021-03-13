<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(field, i) in fields" :key="i">{{ field.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td :colspan="fields.length" class="text-center">
          <em class="text-muted">-- tidak ada data --</em>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array
    }
  }
};
</script>
