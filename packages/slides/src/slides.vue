<template>
  <div class="v-slides">
    <div class="v-slides-window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vSlides',
    mounted() {
      this.$children[0].visible = true
      setTimeout(()=>{
        this.$children[0].visible = false
        this.$children[1].visible = true
      },3000)
    }
  }
</script>

<style scoped lang="scss">
  .v-slides{
    display: inline-flex;
    border: 10px solid black;
    > .v-slides-window{
      position: relative;
    }
  }
</style>