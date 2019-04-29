<template>
  <div class="v-cascader" ref="cascader">
    <div class="selected" @click="onClick">
      <div class="value">{{result}}</div>
      <v-icon name="down" class="v-icon"></v-icon>
    </div>
    <div class="popover" v-if="popoverVisible">
      <v-cascader-items :source="source" :selected="selected" @update:selected="onUpdateSelected"></v-cascader-items>
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
      onClickDocument(e) {
        let {cascader} = this.$refs
        let {target} = e
        if (cascader === target || cascader.contains(target)) {
          return
        }
        this.close()
      },
      open() {
        this.popoverVisible = true
        this.$nextTick(() => {
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close() {
        this.popoverVisible = false
        document.removeEventListener('click', this.onClickDocument)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../var";

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

      > .v-icon {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.3s;
        width: 14px;
        height: 14px;
        color: $cascader-icon-color;
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
    }
  }
</style>