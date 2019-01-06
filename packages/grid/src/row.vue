<template>
  <div class="v-row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
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
    mounted() {
      console.log(this.$children)
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