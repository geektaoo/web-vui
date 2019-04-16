<template>
  <div class="v-popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
         :class="{[`position-${position}`]:true}">
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
    props: {
      position: {
        type: String,
        default: 'top',
        validate(value) {
          return ['top', 'right', 'bottom', 'left'].includes(value)
        }
      }
    },
    methods: {
      popoverPosition() {
        document.body.append(this.$refs.contentWrapper)
        let {left, top, width, height} = this.$refs.triggerWrapper.getBoundingClientRect()
        if (this.position === 'top') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
        } else if (this.position === 'bottom') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + height + window.scrollY + 'px'
        } else if (this.position === 'left') {
          let {height: popoverHight} = this.$refs.contentWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + (height - popoverHight) / 2 + window.scrollY + 'px'
        } else if (this.position === 'right') {
          let {height: popoverHight} = this.$refs.contentWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + width + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + (height - popoverHight) / 2 + window.scrollY + 'px'
        }
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
    box-shadow: 0 0 4px 0 #babec1;
    max-width: 10em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before {
        border-top-color: #babec1;
        top: 100%;
        left: 10px;
      }

      &::after {
        border: 10px solid transparent;
        border-top-color: white;
        top: calc(100% - 1px);
        left: 10px;
      }
    }

    &.position-bottom {
      margin-top: 10px;

      &::before {
        border-bottom-color: #babec1;
        bottom: 100%;
        left: 10px;
      }

      &::after {
        border: 10px solid transparent;
        border-bottom-color: white;
        bottom: calc(100% - 1px);
        left: 10px;
      }
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;

      &::before {
        border-left-color: #babec1;
        top: 50%;
        transform: translateY(-50%);
        left: 100%;
      }

      &::after {
        border: 10px solid transparent;
        border-left-color: white;
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% - 1px);
      }
    }

    &.position-right {
      margin-left: 10px;

      &::before {
        border-right-color: #babec1;
        top: 50%;
        transform: translateY(-50%);
        right: 100%;
      }

      &::after {
        border: 10px solid transparent;
        border-right-color: white;
        top: 50%;
        transform: translateY(-50%);
        right: calc(100% - 1px);
      }
    }
  }
</style>