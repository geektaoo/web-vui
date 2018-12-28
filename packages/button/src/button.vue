<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <v-icon class="icon" v-if="iconName && !isLoading" :name="iconName"></v-icon>
        <v-icon class="icon loading" name="loading" v-if="isLoading"></v-icon>
        <div class="v-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
  import Icon from '../../icon/src/icon'

  export default {
    name: 'VButton',
    components: {
      'v-icon': Icon
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
    $font-color:#fff;
    $button-height:32px;
    $borer-radius:4px;
    $border-color:#999;
    $button-bg: #3eaf7c;
    $border-color-hover: #666;
    $button-active-bg: #eee;
    .v-button {
        font-size: $font-size;
        height: $button-height;
        color:$font-color;
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

        > .v-content {
            order: 2;
        }
        > .icon {
            order: 1;
        }

        &.icon-right {
            > .v-content {
                order: 1;
            }
            > .icon {
                order: 2;
            }
        }

        .loading {
            animation: rotating 3s infinite linear;
        }

    }

</style>