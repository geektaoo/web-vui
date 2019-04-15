<template>
  <div class="v-tabs-pane" :class="classes" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vTabsPane',
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: String | Number,
        required: true
      }
    },
    inject: ['eventBus'],
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          if (name === this.name) {
            this.active = true
          } else {
            this.active = false
          }
        })
      }
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-tabs-pane {
    padding: 10px;
  }
</style>