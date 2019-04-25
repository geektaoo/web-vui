<template>
  <div class="v-cascader">
    <slot></slot>
  </div>
</template>

<script>
  import vCascaderItem from './cascader-item'

  export default {
    name: 'vCascader',
    components: {vCascaderItem}
  }
</script>

<style lang="scss" scoped>
  @import "../../var";
</style>