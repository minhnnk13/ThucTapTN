<template>
  <div>
    <label><slot></slot></label>
    <select v-bind="$attrs" @change="$emit('input', $event.target.value)">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        >{{ option.name }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["options"]
};
</script>

<style lang="scss" scoped>
label {
  display: block;
  margin-bottom: 10px;
}
</style>
