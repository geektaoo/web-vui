<template>
  <div class="v-container" :class="{'error':error}">
    <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)"
    >
    <template v-if="error">
      <v-icon name="error" class="icon-error"></v-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
    <template v-if="success">
      <v-icon name="success" class="icon-success"></v-icon>
    </template>
  </div>
</template>

<script>
  import Icon from '../../icon/src/icon'

  export default {
    name: 'vInput',
    props: {
      value: {
        type: String
      },
      placeholder: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      },
      success: {
        type: Boolean,
        default: false
      }
    },
    components: {
      'v-icon': Icon
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../var";

  .v-container {
    display: inline-flex;
    align-items: center;
    margin: 10px 0;
    font-size: $font-size;
    justify-items: center;

    > :not(:last-child) {
      margin-right: .5em;
    }

    > input {
      height: $height;
      width: 300px;
      padding: 5px;
      font-size: inherit;
      line-height: normal;
      border: 1px solid $border-color;
      border-radius: $border-radius;

      &:focus {
        border-color: $border-color-hover;
        outline: none;
      }

      &:hover {
        border-color: $border-color-hover;
      }

      &[disabled] {
        color: $disabled-color;
        background: $disabled-bg;
        border-color: $disabled-border-color;
        cursor: not-allowed;
      }

      &[readonly] {
        color: $disabled-color;
        background: $disabled-bg;
        border-color: $disabled-border-color;
      }
    }

    > input::-ms-input-placeholder {
      text-align: left;
    }

    > input::-webkit-input-placeholder {
      text-align: left;
    }

    &.error {
      > input {
        border-color: $red;
      }
    }

    .icon-error {
      fill: $red;
    }

    .icon-success {
      fill: $success;
    }

    .errorMessage {
      color: $red;
      word-break: keep-all;
    }
  }
</style>