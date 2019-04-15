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
      this.$children.forEach((vm => {
        if (vm.$options.name === 'vTabsNav') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'vTabsItem' && childVm.name === this.selected) {
              //console.log(item.$el),传递这个元素的name,以及这个元素的实例
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      }))
    }
  }
</script>

<style lang="scss" scoped>
.v-tabs{

}
</style>