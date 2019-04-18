<template>
  <div class="v-collapse-item">
    <div class="title" @click="onClick">{{title}}</div>
    <div class="content" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vCollapseItem',
    data() {
      return {
        visible: false
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
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
          this.eventBus.$emit('update:removeSelected', this.name)
        } else {
          this.eventBus.$emit('update:addSelected', this.name)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../global";

  .v-collapse-item {

    > .title {
      border: 1px solid #ccc;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      cursor: pointer;
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
    }
  }
</style>