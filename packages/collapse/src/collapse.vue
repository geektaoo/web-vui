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
      if (this.selected) {
        this.eventBus.$emit('update:selected', this.selectedArray)
      }
      this.eventBus.$on('update:removeSelected', (name) => {
        let index = this.selectedArray.indexOf(name)
        this.selectedArray.splice(index, 1)
        this.eventBus.$emit('update:selected', this.selectedArray)
      })
      this.eventBus.$on('update:addSelected', (name) => {
        this.selectedArray.push(name)
        this.eventBus.$emit('update:selected', this.selectedArray)
      })
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