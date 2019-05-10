<template>
  <div class="v-popover" ref="popover">
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
        validator(value) {
          return ['top', 'right', 'bottom', 'left'].includes(value)
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].includes(value)
        }
      }
    },
    mounted() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    beforeDestroy() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    methods: {
      popoverPosition() {
        document.body.append(this.$refs.contentWrapper)
        let {left, top, width, height} = this.$refs.triggerWrapper.getBoundingClientRect()
        let {height: popoverHight} = this.$refs.contentWrapper.getBoundingClientRect()
        if (this.position === 'top') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
        } else if (this.position === 'bottom') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + height + window.scrollY + 'px'
        } else if (this.position === 'left') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + (height - popoverHight) / 2 + window.scrollY + 'px'
        } else if (this.position === 'right') {
          this.$refs.contentWrapper.style.left = left + width + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + (height - popoverHight) / 2 + window.scrollY + 'px'
        }
      },
      onClickDocument(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) {
          return
        }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) {
          return
        }
        this.close()
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.popoverPosition()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close() {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-popover {
    display: inline-block;
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
    z-index: 10;

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
        border-bottom: none;
      }

      &::after {
        border: 10px solid transparent;
        border-top-color: white;
        top: calc(100% - 1px);
        left: 10px;
        border-bottom: none;
      }
    }

    &.position-bottom {
      margin-top: 10px;

      &::before {
        border-bottom-color: #babec1;
        bottom: 100%;
        left: 10px;
        border-top: none;
      }

      &::after {
        border: 10px solid transparent;
        border-bottom-color: white;
        bottom: calc(100% - 1px);
        left: 10px;
        border-top: none;
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
        border-right: none;
      }

      &::after {
        border: 10px solid transparent;
        border-left-color: white;
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% - 1px);
        border-right: none;
      }
    }

    &.position-right {
      margin-left: 10px;

      &::before {
        border-right-color: #babec1;
        top: 50%;
        transform: translateY(-50%);
        right: 100%;
        border-left: none;
      }

      &::after {
        border: 10px solid transparent;
        border-right-color: white;
        top: 50%;
        transform: translateY(-50%);
        right: calc(100% - 1px);
        border-left: none;
      }
    }
  }
</style>