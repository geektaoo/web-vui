<template>
  <transition name="fate"
              mode="out-in"
              @enter="handleEnter"
              @leave="handleLeave"
  >
    <div class="v-toast" :class="positionClass" v-if="isShow">
      <span>{{content}}</span>
      <span class="close-btn" v-if="showClose" @click="onClickClose">
        {{closeText}}
      </span>
    </div>
  </transition>
</template>

<script>
  import Velocity from 'velocity-animate'

  export default {
    name: 'vToast',
    props: {
      content: {
        type: String,
        default: ''
      },
      autoClose: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 3000
      },
      isShow: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'right', 'left', 'middle'].includes(value)
        }
      },
      closeText: {
        type: String,
        default: '关闭'
      },
      showClose: {
        type: Boolean,
        default: false
      },
      onClose: {
        type: Function
      }
    },
    computed: {
      positionClass() {
        return `position-${this.position}`
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.duration)
      }
    },
    methods: {
      close() {
        this.isShow = false
        this.$el.remove()
        this.$destroy()
      },
      onClickClose() {
        this.isShow = false
        this.close()
        this.onClose()
      },
      handleEnter(el, done) {
        Velocity(el, 'fadeIn', 500, done)
      },
      handleLeave(el, done) {
        Velocity(el, 'reverse', 500, done)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../var";

  $content-font-size: 14px;
  $close-btn-size: 10px;
  $position-offset: 8px;
  $toast-padding: 10px;
  $border-radius-middle: 4px;
  $toast-bg: #3eaf7c;
  $font-color: #fff;
  .v-toast {
    display: flex;
    align-items: center;
    position: fixed;
    box-shadow: 0 2px 12px #a8abaf;
    color: $font-color;
    background: $toast-bg;
    font-size: $content-font-size;
    padding: $toast-padding;
    border-radius: $border-radius-middle;

    .close-btn {
      margin-left: 16px;
      padding-left: 8px;
      cursor: pointer;
      border-left: 1px solid #fff;
      flex-shrink: 0;
    }
  }

  .position-top {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .position-bottom {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .position-left {
    left: 20px;
    top: 30px;
  }

  .position-right {
    right: 20px;
    top: 30px;
  }

  .position-middle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>



