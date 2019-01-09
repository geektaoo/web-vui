<template>
  <div class="v-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "VRow",
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    computed: {
      rowStyle() {
        let gutter = this.gutter
        return gutter && {
          marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="scss">
  .v-row {
    display: flex;
  }
</style>