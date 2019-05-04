<template>
  <div class="v-menu">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'vMenu',
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
    props: {
      selected: {
        type: String,
        required:true
      }
    },
    mounted() {
      this.eventBus.$on('click-item', (name) => {
        this.$emit('update:selected', name)
      })
      this.eventBus.$emit('firstSelected',this.selected)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/var";

  .v-menu {
    border: 1px solid #eeeeee;
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    transition: .3s all ease-in;
  }
</style>