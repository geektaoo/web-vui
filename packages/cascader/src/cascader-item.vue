<template>
  <div class="v-cascader-item">
    <div class="item-wrapper">
      <div class="v-label"
           v-for="item in source"
           :key="item.value"
           @click="onClick(item)"
           :class="{active:activeSelected(item)}"
      >
        <span>{{item.label}}</span>
        <v-icon class="v-icon"
                name="right"
                v-if="item.children"
                :class="{active:activeSelected(item)}"
        ></v-icon>
      </div>
    </div>
    <div class="children-wrapper" v-if="rightItems">
      <v-cascader-item :source="rightItems"
                       :selected="selected"
                       :level="level+1"
                       @update:selected="onUpdateSelected"
      ></v-cascader-item>
    </div>
  </div>
</template>

<script>
  import vIcon from '../../icon/index'

  export default {
    name: 'vCascaderItem',
    components: {vIcon},
    props: {
      source: {
        type: Array
      },
      selected: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 0
      }
    },
    computed: {
      rightItems() {
        let currentSelected = this.selected[this.level]
        if (currentSelected && currentSelected.children) {
          return currentSelected.children
        } else {
          return null
        }
      }
    },
    methods: {
      onClick(item) {
        console.log(item,'item')
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1)
        console.log(this.selected,'selected')
        this.$emit('update:selected', copy)
      },
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      },
      activeSelected(item) {
        if (this.selected[this.level] && item.label === this.selected[this.level].label) {
          return true
        }else {
          return false
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-cascader-item {
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
    height: 200px;
    /*overflow:scroll;*/

    > .item-wrapper {
      height: 100%;
      margin: 0.3em 0;
      cursor: pointer;

      > .v-label {
        padding: 0.3em 1em;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &.active {
          background: #f5f5f5;
          font-weight: 600;
          color: #3eaf7c;
        }

        > span {
          padding-right: 10px;
          word-break: keep-all;
          white-space: nowrap;
        }

        > .v-icon {
          margin-left: auto;
          transform: scale(0.8);
          fill: rgba(0, 0, 0, 0.45);

          &.active{
            fill: #3eaf7c;
          }
        }
      }
    }

    > .children-wrapper {
      height: 100%;
      border-left: 1px solid #e8e8e8;
    }
  }
</style>