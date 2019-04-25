<template>
  <div class="v-tabs-nav">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
  export default {
    name: 'vTabsNav',
    inject: ['eventBus'],
    mounted() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected',(name,vm)=>{
          // console.log(name,vm.$el)
          let lineWith = vm.$el.clientWidth
          let lineLeft = vm.$el.offsetLeft
          this.$refs.line.style.width = `${lineWith}px`
          this.$refs.line.style.left = `${lineLeft}px`
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../var";
  .v-tabs-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    > .line{
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $border-color;
      transition: all 0.5s;
      animation: 0.5s line  linear;
    }

    @keyframes line {
      from{
        transform: scaleX(0);
      }
      to{
        transform: scaleX(1);
      }
    }
  }
</style>