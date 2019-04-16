<template>
  <div class="v-popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
    mounted() {

    },
    methods: {
      popoverPosition() {
        document.body.append(this.$refs.contentWrapper)
        let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      listenToDocument() {
        let eventHandle = (e) => {
          if (this.$refs.contentWrapper.contains(e.target)) {
            //console.log('点击的是popover'),就什么也不做
            return
          } else {
            this.visible = false
            document.removeEventListener('click', eventHandle)
          }
        }
        document.addEventListener('click', eventHandle)
      },
      openPopover() {
        this.$nextTick(() => {
          this.popoverPosition()
          this.listenToDocument()
        })
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          //console.log('点击的是按钮')
          this.visible = !this.visible
          if (this.visible) {
            this.openPopover()
          }
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