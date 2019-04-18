<template>
  <div class="v-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'vCollapse',
    data() {
      return {
        eventBus: new Vue(),
        selectedArray: this.selected || []
      }
    },
    props: {
      selected: {
        type: Array
      },
      single: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      if (this.single) {
        if (this.selected) {
          //如果是single方式打开的话，数组中只能是第一个元素
          this.selectedArray.splice(1)
          this.updateSelected()
        }
        this.onRemoveSelected()
        this.eventBus.$on('update:addSelected', (name) => {
          this.selectedArray.push(name)
          if (this.selectedArray.length > 1) {
            this.selectedArray.shift()
          }
          this.updateSelected()
        })
      } else {
        if (this.selected) {
          this.updateSelected()
        }
        this.onRemoveSelected()
        this.eventBus.$on('update:addSelected', (name) => {
          this.selectedArray.push(name)
          this.updateSelected()
        })
      }
    },
    methods: {
      onRemoveSelected() {
        this.eventBus.$on('update:onRemoveSelected', (name) => {
          let index = this.selectedArray.indexOf(name)
          this.selectedArray.splice(index, 1)
          this.updateSelected()
        })
      },
      updateSelected() {
        this.eventBus.$emit('update:selected', this.selectedArray)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-collapse {
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
  }
</style>