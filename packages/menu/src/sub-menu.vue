<template>
  <div class="v-sub-menu" ref="subMenu" :class="{vertical}">
    <div class="title" @click="onClick" :class="{active:subActive}">
      <slot name="title"></slot>
      <span class="icon" :class="{iconActive:open}">
        <v-icon name="right"></v-icon>
      </span>
    </div>
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
    >
      <div class="line" v-show="subActive" :class="{vertical}"></div>
    </transition>

    <transition
        @before-enter="popoverBeforeEnter"
        @enter="popoverEnter"
        @after-enter="popoverAfterEnter"
        @before-leave="popoverBeforeLeave"
        @leave="popoverLeave"
        @after-leave="popoverAfterLeave"
    >
      <div class="popover" v-show="open" :class="{vertical}">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import vIcon from '../../icon/index'

  export default {
    name: 'vSubMenu',
    components: {vIcon},
    inject: ['eventBus', 'root', 'vertical'],
    data() {
      return {
        open: false
      }
    },
    props: {
      name: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.eventBus.$on('close-popover', (name) => {
        this.closePopover()
      })
    },
    computed: {
      subActive() {
        return this.root.currentSelected.includes(this.name)
      }
    },
    methods: {
      onClick() {
        if (this.open === true) {
          this.closePopover()
        } else {
          this.openPopover()
        }
      },
      updateCurrentPath() {
        this.root.currentSelected.unshift(this.name)
        if (this.$parent.updateCurrentPath) {
          this.$parent.updateCurrentPath()
        }
      },
      openPopover() {
        this.open = true
        this.$nextTick(() => {
          document.addEventListener('click', this.onClickDocument)
        })
      },
      closePopover() {
        this.open = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClickDocument(e) {
        if (this.$refs.subMenu === e.target) {
          return
        }
        if (this.$refs.subMenu.contains(e.target)) {
          return
        }
        if (this.$parent === e.target) {
          return
        }
        this.closePopover()
      },
      beforeEnter(el) {
        el.style.left = '50%'
        el.style.width = 0
      },
      enter(el) {
        setTimeout(() => {
          el.style.width = '100%'
          el.style.left = '0'
        })
      },
      beforeLeave(el) {
        el.style.width = '100%'
        el.style.left = '0'
      },
      leave(el) {
        el.style.left = '50%'
        el.style.width = 0
      },
      popoverBeforeEnter(el) {
        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
        el.style.overflow = 'hidden'
        el.style.transition = '.3s all ease-in-out'
      },
      popoverEnter(el) {
        el.style.height = el.scrollHeight + 'px'
      },
      popoverAfterEnter(el) {
        el.style.overflow = ''
        if (this.vertical) {
          el.style.height = ''
        }
      },
      popoverBeforeLeave(el) {
        el.style.height = el.scrollHeight + 'px'
        el.style.overflow = 'hidden'
        el.style.transition = '.1s all ease-in-out'
        if (this.vertical) {
          el.style.transition = '.3s all'
        }
      },
      popoverLeave(el) {
        setTimeout(() => {
          el.style.height = 0
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
        })
      },
      popoverAfterLeave(el) {
        el.style.overflow = ''
        if (this.vertical) {
          el.style.height = ''
        }
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
      box-sizing: border-box;
      padding: 10px 20px;
      white-space: nowrap;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > .icon {
        display: none;
        width: 0.8em;
        fill: rgb(191, 191, 191);
        transition: all .3s ease;
      }

      &.active {
        color: #55E6C1;

        > .icon {
          fill: rgb(129, 236, 236);
        }
      }
    }

    &.vertical {
      width: 100%;

      > .title {
        &.active {
          background: #f5fefb;
        }
      }
    }

    > .line {
      width: 100%;
      bottom: 0;
      position: absolute;
      left: 0;
      transition: all .3s ease;
      border-bottom: 2px solid #55E6C1;

      &.vertical{
        display: none;
      }
    }

    > .popover {
      position: absolute;
      top: 100%;
      left: 0;
      background: #fff;
      margin-top: 4px;
      white-space: nowrap;
      border: 1px solid #eeeeee;
      border-radius: $border-radius;
      box-shadow: $box-shadow;
      font-size: 14px;
      min-width: 8em;

      &.vertical {
        position: static;
        border: none;
        box-shadow: none;
      }
    }
  }

  .v-sub-menu .v-sub-menu {
    > .title {
      color: #57606f;
      font-weight: 600;

      &.active {
        color: #55E6C1;
      }

      .icon {
        display: inline-flex;
        align-items: center;
        margin-left: 8px;
        transition: all .3s ease;

        &.iconActive {
          transform: rotate(90deg);
        }
      }
    }

    .line {
      display: none;
    }

    > .popover {
      position: absolute;
      top: 0;
      left: 100%;
      margin-left: 4px;

      &.vertical {
        position: static;
        box-shadow: none;
        margin-left: 4px;
      }
    }
  }

</style>