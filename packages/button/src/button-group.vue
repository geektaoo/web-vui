<template>
    <div class="l-button-group">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'LuButtonGroup',
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`l-button-group下面的子元素应该是l-button,但是你写的是${name}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    $font-size:14px;
    $button-height:32px;
    $borer-radius:4px;
    $border-color:#999;
    $button-bg: white;
    $border-color-hover: #666;
    $button-active-bg: #eee;
    .l-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .l-button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-top-left-radius: $borer-radius;
                border-bottom-left-radius: $borer-radius;
            }
            &:last-child {
                border-top-right-radius: $borer-radius;
                border-bottom-right-radius:$borer-radius;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }

</style>