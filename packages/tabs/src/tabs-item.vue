<template>
  <div class="v-tabs-item" @click="Onclick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vTabsItem',
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
    },
    methods: {
      Onclick() {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../global";

  .v-tabs-item {
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      color: $font-tips-color;
    }

    &.active {
      font-weight: bolder;
      background: $tabs-item-active-bg;
      color: $font-tips-color;
      transition: all 0.3s;
    }
  }
</style>