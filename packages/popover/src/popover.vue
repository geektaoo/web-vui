<template>
  <div class="v-popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
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
    mounted(){

    },
    methods: {
      xxx() {
        this.visible = !this.visible
        if (this.visible) {
          this.$nextTick(() => {
            document.body.append(this.$refs.contentWrapper)
            let {left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            console.log(left,top)
            let eventHandle = () => {
              this.visible = false
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
    position: relative;
  }
  .content-wrapper {
    display: inline-block;
    position: absolute;
    padding: 16px;
    border-radius: 4px;
    background-color: #fff;
    border-color: transparent #fff transparent transparent;
    transform: translateY(-100%);
    box-shadow: 0 0 4px 0 #babec1;
  }
</style>