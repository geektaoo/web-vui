<template>
  <div class="v-collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vCollapse'
  }
</script>

<style lang="scss" scoped>
  .v-collapse{
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
  }
</style>