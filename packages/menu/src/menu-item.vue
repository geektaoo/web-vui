<template>
  <div class="v-menu-item" @click="onClick" :class="{active}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vMenuItem',
    data() {
      return {
        active: false
      }
    },
    inject: ['eventBus'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.eventBus.$on('click-item', (name) => {
        this.listenToActive(name)
      })
      this.eventBus.$on('firstSelected', (name) => {
        this.listenToActive(name)
      })
    },
    methods: {
      onClick() {
        this.eventBus.$emit('click-item', this.name)
      },
      listenToActive(item) {
        this.active = this.name === item
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/var";

  .v-menu-item {
    height: 100%;
    padding: 15px 25px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    &.active {
      color: $font-main-color;
      &::after{
        content: '';
      }
    }
  }
</style>