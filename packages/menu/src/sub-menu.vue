<template>
  <div class="v-sub-menu">
    <div class="title" @click="onClick">
      <slot name="title"></slot>
    </div>
    <div class="popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vSubMenu',
    inject: ['eventBus'],
    data() {
      return {
        open: false
      }
    },
    methods: {
      onClick() {
        this.open = !this.open
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/var";

  .v-sub-menu {
    position: relative;
    height: 100%;

    > .title {
      height: 100%;
      padding: 15px 25px;
      white-space: nowrap;
      display: flex;
      justify-content: center;
      align-items: center;
      /*border: 1px solid red;*/
    }

    > .popover {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 4px;
      white-space: nowrap;
      border: 1px solid blanchedalmond;
    }
  }

  .v-sub-menu .v-sub-menu .popover {
    position: absolute;
    top: 0;
    left: 100%;
    margin-left: 4px;
  }
</style>