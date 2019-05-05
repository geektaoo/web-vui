<template>
  <div class="v-menu-item" @click="onClick" :class="{active,vertical}">
    <slot></slot>
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
    >
      <div class="line" v-show="active" :class="{vertical}"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'vMenuItem',
    data() {
      return {
        active: false
      }
    },
    inject: ['eventBus', 'root','vertical'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.eventBus.$on('selected', (name) => {
        this.listenToActive(name)
      })
      this.eventBus.$on('click-item', (name) => {
        this.listenToActive(name)
      })
    },
    computed: {},
    methods: {
      onClick() {
        this.eventBus.$emit('click-item', this.name)
        this.eventBus.$emit('close-popover', this.name)
        /**
         *  如果当前的item的parent有updateCurrentPath方法，才会调用updateCurrentPath()。
         *  保证了只有在menu里面item才能运行的方法
         **/
        this.$parent.updateCurrentPath && this.$parent.updateCurrentPath()
      },
      listenToActive(name) {
        return this.active = this.name === name
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
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/var";

  .v-menu-item {
    height: 100%;
    padding: 10px 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    /*border: 1px solid blue;*/

    &.active {
      color: #55E6C1;

      &.vertical{
        background:#f5fefb;
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
  }

  .v-sub-menu .v-menu-item {
    transition: all .3s ease;

    &.active {
      background: $background-light;
    }

    > .line {
      display: none;
    }
  }
</style>