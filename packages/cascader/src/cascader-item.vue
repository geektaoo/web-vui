<template>
  <div class="v-cascader-item">
    <div class="item-wrapper">
      <div class="v-label" v-for="item in source" :key="item.value" @click="onClick(item)">
        <span>{{item.label}}</span>
        <v-icon class="v-icon" name="right" v-if="item.children"></v-icon>
      </div>
    </div>
    <div class="children-wrapper" v-if="rightItems">
      <v-cascader-item :source="rightItems"
                       :level="level+1"
                       :selected="selected"
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
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1)
        this.$emit('update:selected', copy)
      },
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
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

    > .item-wrapper {
      height: 100%;
      padding: 0.3em 0;

      > .v-label {
        padding: 0.3em 1em;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        > span {
          padding-right: 10px;
          word-break: keep-all;
          white-space: nowrap;
        }

        > .v-icon {
          margin-left: auto;
          transform: scale(0.8);
          fill: rgba(0, 0, 0, 0.45);
        }
      }
    }

    > .children-wrapper {
      height: 100%;
      border-left: 1px solid #e8e8e8;
    }
  }
</style>