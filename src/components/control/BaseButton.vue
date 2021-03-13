<template>
  <button>
    <slot name="icon-button"></slot>
    <slot></slot>
    <slot name="tooltip"></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  position: relative;
}
</style>
