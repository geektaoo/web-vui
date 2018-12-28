<template>
    <svg class="v-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
  import './iconfont'

  export default {
    name: 'VIcon',
    props: ['name']
  }
</script>

<style lang="scss" scoped>
    .v-icon {
        width: 1em;
        height: 1em;
    }
</style>