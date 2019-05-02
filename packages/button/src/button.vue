<template>
  <button class="v-button" :class="classObject" @click="onClick">
    <v-icon class="v-icon" v-if="icon && !isLoading" :name="icon"></v-icon>
    <v-icon class="v-icon v-loading" name="loading" v-if="isLoading"></v-icon>
    <div class="v-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from '../../icon/src/icon'

  export default {
    name: 'vButton',
    components: {
      'v-icon': Icon
    },
    props: {
      icon: {
        type: String
      },
      size: {
        type: String,
        validator(value) {
          return ['2x', '3x', '4x'].includes(value)
        }
      },
      isLoading: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left',
        validator: function (value) {
          return ['left', 'right'].includes(value)
        }
      }
    },
    computed: {
      classObject() {
        return [
          this.size && `size-${this.size}`,
          `icon-${this.position}`
        ]
      }
    },
    methods: {
      onClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/var';

  .v-button {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-size: $font-size;
    height: $button-height;
    color: $font-color;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &.size-2x {
      font-size: 16px;
      height: 34px;
    }

    &.size-3x {
      font-size: 18px;
      height: 36px;
    }

    &.size-4x {
      font-size: 20px;
      height: 38px;
    }

    &:hover {
      border-color: $border-color-hover;
    }

    &:active {
      background-color: $button-active-bg;
    }

    &:focus {
      outline: none;
    }

    > .v-content {
      order: 2;
    }

    > .v-icon {
      order: 1;
      fill: #fff;
    }

    &.icon-right {
      > .v-content {
        order: 1;
      }

      > .v-icon {
        order: 2;
        fill: #fff;
      }
    }

    .v-loading {
      animation: rotating 3s infinite linear;
    }

  }

  .v-button[disabled] {
    color: $disabled-color;
    background: $disabled-bg;
    border: 1px solid $disabled-border-color;
    cursor: not-allowed;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .v-button:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .3s, opacity .5s;
  }

  .v-button:active:after {
    transform: scale(0, 0);
    opacity: .3;
    //设置初始状态
    transition: 0s;
  }

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>