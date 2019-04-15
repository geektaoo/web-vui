<template>
  <div class="v-tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'vTabs',
    props: {
      selected: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.eventBus.$emit('update:selected', this.selected)
    }
  }
</script>

<style lang="scss" scoped>

</style>