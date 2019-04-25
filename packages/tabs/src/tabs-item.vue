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
        active: false,
      }
    },
    props: {
      name: {
        type: String | Number,
        required: true
      },
      disabled:{
        type:Boolean,
        default:false
      }
    },
    inject: ['eventBus'],
    mounted() {
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
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    methods: {
      Onclick() {
        if (this.disabled) {return}
        this.eventBus.$emit('update:selected', this.name,this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../var";

  .v-tabs-item {
    padding: 10px 20px;
    cursor: pointer;
    position: relative;

    &:hover {
      color: $font-tips-color;
    }

    &.active {
      font-weight: bolder;
      color: $font-tips-color;
      transition: all 0.3s;
    }
    &.disabled{
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
</style>