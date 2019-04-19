<template>
  <svg class="v-icon" :class="size">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
  import './iconfont'

  export default {
    name: 'vIcon',
    props: {
      name: {
        type: String
      },
      size: {
        type: String,
        validator(value) {
          return ['size-2x', 'size-3x', 'size-4x'].includes(value)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;

    &.size-2x {
      width: 2em;
      height: 2em;
    }

    &.size-3x {
      width: 3em;
      height: 3em;
    }

    &.size-4x {
      width: 4em;
      height: 4em;
    }
  }
</style>