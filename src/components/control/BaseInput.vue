<template>
  <div class="base-input">
    <label><slot></slot></label>
    <slot name="input-icon"></slot>
    <input
      ref="input"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <slot name="tooltip"></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["value"],
  data() {
    return {};
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
}
label {
  display: block;
  font-family: Barlow-Bold;
}
input[type="checkbox"] {
  width: 15px;
}
.base-input {
  width: 100%;
}
</style>
