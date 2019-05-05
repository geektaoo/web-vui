<template>
  <div class="v-sub-menu" ref="subMenu">
    <div class="title" @click="onClick" :class="{active:subActive}">
      <slot name="title"></slot>
    </div>
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
    >
      <div class="line" v-show="subActive"></div>
    </transition>
    <div class="popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vSubMenu',
    inject: ['eventBus', 'root'],
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
      leave(el) {
        el.style.left = '50%'
        el.style.width = 0
      },
      beforeLeave(el) {
        el.style.width = '100%'
        el.style.left = '0'
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
      padding: 10px 20px;
      white-space: nowrap;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &.active {
        color: #55E6C1;
      }
    }

    > .line {
      width: 100%;
      bottom: 0;
      position: absolute;
      left: 0;
      transition: all .3s ease;
      border-bottom: 2px solid #55E6C1;
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
    }
  }

  .v-sub-menu .v-sub-menu {
    .line {
      display: none;
    }
  }

  .v-sub-menu .v-sub-menu .popover {
    position: absolute;
    top: 0;
    left: 100%;
    margin-left: 4px;
  }
</style>