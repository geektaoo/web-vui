<template>
  <div class="v-menu" :class="{vertical}">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'vMenu',
    data() {
      return {
        eventBus: new Vue(),
        currentSelected: []
      }
    },
    provide() {
      return {
        eventBus: this.eventBus,
        root: this,
        vertical: this.vertical
      }
    },
    props: {
      selected: {
        type: String,
        required: true
      },
      vertical: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      //根据初选值，高亮selected的下标
      this.currentSelected.push(this.selected)
      this.eventBus.$emit('selected', this.selected)
      this.eventBus.$on('click-item', (name) => {
        this.currentSelected = []
        this.currentSelected.push(name)
        this.$emit('update:selected', name)
      })
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/var";

  .v-menu {
    border-bottom: 1px solid #eeeeee;
    display: inline-flex;
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    transition: .3s all ease-in;
    white-space: nowrap;
    user-select: none;

    &.vertical {
      min-width: 12em;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      border: 1px solid #eeeeee;
    }
  }
</style>