<template>
    <svg class="l-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
  import './iconfont'

  export default {
    name: 'LuIcon',
    props: ['name']
  }
</script>

<style lang="scss" scoped>
    .l-icon {
        width: 1em;
        height: 1em;
    }
</style>