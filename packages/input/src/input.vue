<template>
  <div class="v-container" :class="{'error':error}">
    <div class="input-contain">
      <input
          ref="input"
          :type="type"
          :value="currentValue"
          :placeholder="placeholder"
          :disabled="disabled"
          @change="handleChange"
          @input="handleInput"
      >
      <span class="icon-clear" v-if="showClear" @click="onClear">
      <v-icon name="close"></v-icon>
    </span>
    </div>
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
  import vIcon from '../../icon/src/icon'

  export default {
    name: 'vInput',
    components: {vIcon},
    props: {
      value: {
        type: String
      },
      type: {
        type: String,
        default: 'text',
        validator(value) {
          return ['text', 'password'].includes(value)
        }
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
    data() {
      return {
        currentValue: this.value
      }
    },
    computed: {
      showClear() {
        return this.currentValue && this.currentValue !== ''
      }
    },
    methods: {
      handleInput(event) {
        const value = event.target.value
        this.$emit('input-demo.vue', value)
        this.setCurrentValue(value)
      },
      handleChange(event) {
        this.$emit('change', event.target.value)
      },
      setCurrentValue(value) {
        this.currentValue = value
      },
      onClear() {
        this.$emit('input-demo.vue', '')
        this.$emit('change', '')
        this.setCurrentValue('')
        this.$refs.input.focus()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/var';

  .v-container {
    display: inline-flex;
    align-items: center;
    margin: 10px 0;
    font-size: $font-size;
    justify-items: center;
    position: relative;

    > :not(:last-child) {
      margin-right: .5em;
    }

    > .input-contain {
      position: relative;

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

      > .icon-clear {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        fill: #b2bec3;
        cursor: pointer;
      }
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