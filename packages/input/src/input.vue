<template>
    <div class="container" :class="{'error':error}">
        <input type="text" :placeholder="placeholder"
               :value="value" :disabled="disabled" :readonly="readonly"
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
    name: 'VInput',
    props: {
      value: {
        type: String
      },
      placeholder:{
        type:String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      },
      success: {
        type:Boolean,
        default:false
      }
    },
    components: {
      'v-icon': Icon
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../global";
    .container {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        justify-items: center;
        margin: 10px 0;
        > :not(:last-child) {
            margin-right: .5em;
        }
        > input {
            height: $height;
            line-height: normal;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:focus {
                outline: none;
                border-color: $border-color-hover;
            }
            &:hover {
                border-color: $border-color-hover;
            }
            &[disabled] {
                border-color: $disabled-border-color;
                color: $disabled-color;
                background: $disabled-bg;
                cursor: not-allowed;
            }
            &[readonly] {
                border-color: $disabled-border-color;
                color: $disabled-color;
                background: $disabled-bg;
            }
        }
        > input::-ms-input-placeholder {
            text-align: left;
        }
        > input::-webkit-input-placeholder{
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
            fill:$success;
        }
        .errorMessage {
            color: $red;
        }
    }
</style>