<template>
  <div class="v-cascader" ref="cascader">
    <div class="selected" @click="onClick">
      <div class="value">{{result}}</div>
      <div class="icon-wrapper" @click.stop="clearSelected">
        <v-icon name="down"
                class="icon-down"
                :class="{rotate:popoverVisible}"
                v-if="!selected.length"
        ></v-icon>
        <v-icon ref="iconClose" class="icon-close" name="close" v-if="selected.length"></v-icon>
      </div>
    </div>
    <div class="popover" v-if="popoverVisible">
      <v-cascader-items :source="source"
                        :selected="selected"
                        @update:selected="onUpdateSelected"
      ></v-cascader-items>
    </div>
  </div>
</template>

<script>
  import vIcon from '../../icon/index'
  import vCascaderItems from './cascader-item'

  export default {
    name: 'vCascader',
    data() {
      return {
        popoverVisible: false
      }
    },
    components: {vCascaderItems, vIcon},
    props: {
      source: {
        type: Array
      },
      selected: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      result() {
        return this.selected.map(item => item.label).join(' / ')
      }
    },
    methods: {
      onClick() {
        if (this.popoverVisible === true) {
          this.close()
        } else {
          this.open()
        }
      },
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      },
      clearSelected() {
        this.$emit('update:selected', [])
        this.close()
      },
      onClickDocument(e) {
        let {cascader, iconClose} = this.$refs
        let {target} = e
        if (cascader === target || cascader.contains(target)) {
          if (iconClose && iconClose.$el === target) {
            this.clearSelected()
          } else {
            return
          }
        }
        this.close()
      },
      open() {
        this.$nextTick(() => {
          document.addEventListener('click', this.onClickDocument)
        })
        this.popoverVisible = true
      },
      close() {
        document.removeEventListener('click', this.onClickDocument)
        this.popoverVisible = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/var';

  .v-cascader {
    font-size: 14px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: $border-radius;
    position: relative;

    > .selected {
      cursor: pointer;
      width: 300px;
      position: relative;

      > .value {
        height: $height;
        padding: 0 1em;
        border: 1px solid rgba(0, 0, 0, .15);
        border-radius: $border-radius;
        font-size: $font-size;
        display: flex;
        align-items: center;
      }

      > .icon-wrapper {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);

        > .icon-down {
          transition: all 0.3s;
          width: 14px;
          height: 14px;
          color: $cascader-icon-color;

          &.rotate {
            transform: rotate(180deg);
            transition: all 0.3s;
          }
        }

        > .icon-close {
          width: 16px;
          height: 16px;
          fill: rgba(0, 0, 0, 0.8);

          &:hover {
            fill: #000;
          }
        }
      }
    }

    > .popover {
      position: absolute;
      top: 100%;
      left: 0;
      /*margin-top: 2px;*/
      background: #fff;
      border: 1px solid rgba(0, 0, 0, .15);
      border-radius: $border-radius;
      box-shadow: $box-shadow;
      z-index: 1;
    }
  }
</style>