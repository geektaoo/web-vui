<template>
  <transition name="slide">
    <div class="v-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'vSlidesItem',
    data() {
      return {
        visible: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .slide-leave-active{
    position: absolute;
    left: 0;
    top: 0;
    border: 10px solid red;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 3s;
  }
  .slide-enter{
    transform: translateX(100%);
  }
  .slide-leave-to{
    transform: translateX(-100%);
  }
</style>