<template>
  <div class="v-popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vPopover',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        console.log('切换visible')
        if (this.visible) {
          this.$nextTick(() => {
            console.log('新增一个监听器')
            let eventHandle = () => {
              console.log('点击doucument关闭popover')
              this.visible = false
              console.log('删除监听器')
              document.removeEventListener('click', eventHandle)
            }
            document.addEventListener('click', eventHandle)
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-popover {
    display: inline-block;
    border: 1px solid yellow;

    > .content-wrapper {
      border: 1px solid red;
    }
  }
</style>