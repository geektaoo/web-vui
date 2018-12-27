<template>
    <button class="l-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <l-icon class="icon" v-if="iconName && !isLoading" :name="iconName"></l-icon>
        <l-icon class="icon loading" name="loading" v-if="isLoading"></l-icon>
        <div class="l-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
  import Icon from './icon'

  export default {
    name: 'WButton',
    components: {
      'l-icon': Icon
    },
    props: {
      iconName: {},
      isLoading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator: function (value) {//属性验证器
          return !(value !== 'left' && value !== 'right')
        }
      }
    }

  }
</script>

<style lang="scss" scoped>
    @keyframes rotating {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    $font-size:14px;
    $button-height:32px;
    $borer-radius:4px;
    $border-color:#999;
    $button-bg: white;
    $border-color-hover: #666;
    $button-active-bg: #eee;
    .l-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $borer-radius;
        border: 1px solid  $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color:  $button-active-bg;
        }

        &:focus {
            outline: none;
        }

        > .l-content {
            order: 2;
        }
        > .icon {
            order: 1;
        }

        &.icon-right {
            > .l-content {
                order: 1;
            }
            > .icon {
                order: 2;
            }
        }

        .loading {
            animation: rotating 1s infinite linear;
        }

    }

</style>