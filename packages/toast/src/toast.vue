<template>
  <div class="v-toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "VToast"
  }
</script>

<style lang="scss" scoped>
  $content-font-size: 14px;
  $close-btn-size: 10px;
  $position-offset: 8px;
  $toast-height: 50px;
  $toast-padding:10px;
  $border-radius-middle: 4px;
  $toast-bg:#3eaf7c;
  $font-color:#fff;
  .v-toast{
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 2px 12px #a8abaf;
    color:$font-color;
    background: $toast-bg;
    font-size: $content-font-size;
    height: $toast-height;
    padding: 0 $toast-padding;
    border-radius: $border-radius-middle;
  }
</style>



