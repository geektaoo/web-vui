<template>
  <div class="v-collapse-item">
    <div class="title" @click="onClick">
      <v-icon class="icon" name="right" :class="{rotate:visible}"></v-icon>
      <span>{{title}}</span>
    </div>

    <collapse>
      <div class="content" v-show="visible" ref="content">
        <slot></slot>
      </div>
    </collapse>
  </div>
</template>

<script>
  import vIcon from '../../icon/src/icon'
  import collapse from '../../collapse'

  export default {
    name: 'vCollapseItem',
    components: {
      vIcon,
      collapse
    },
    data() {
      return {
        visible: false,
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String || Number,
        required: true
      }
    },
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (names) => {
        if (names.includes(this.name)) {
          this.visible = true
        } else {
          this.visible = false
        }
      })
    },
    methods: {
      onClick() {
        if (this.visible === true) {
          this.eventBus.$emit('update:onRemoveSelected', this.name)
        } else {
          this.eventBus.$emit('update:addSelected', this.name)
        }
      },
      beforeEnter(el) {
        el.style.height = 0
        // el.style.paddingTop = 0
        // el.style.paddingBottom = 0
        el.style.overflow = 'hidden'
        el.style.transition = '.3s all ease-in-out'
      },
      enter(el) {
        el.style.height = el.scrollHeight + 'px'
      },
      afterEnter(el) {
        el.style.overflow = ''
        el.style.height = ''
      },
      beforeLeave(el) {
        el.style.height = el.scrollHeight + 'px'
        el.style.overflow = 'hidden'
        el.style.transition = '.3s all'
      },
      leave(el) {
        setTimeout(() => {
          el.style.height = 0
        })
      },
      afterLeave(el) {
        el.style.overflow = ''
        el.style.height = ''
        el.style.transition = '.3s all'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/var';

  .v-collapse-item {

    > .title {
      border: 1px solid #ccc;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 10px 8px;
      cursor: pointer;

      > .icon {
        padding-right: 4px;
        transition: 0.3s all;

        &.rotate {
          transform: rotate(90deg);
        }
      }
    }

    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }

    &:last-child {
      > .title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
        border-bottom: none;
      }
    }

    > .content {
      padding: 10px 8px;
      background: #f5f6f8;
      transition: height .5s;
    }
  }
</style>