<template>
  <div class="v-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vTabsBody',
    inject: ['eventBus']
  }
</script>

<style lang="scss" scoped>

</style>