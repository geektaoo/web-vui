<template>
  <div class="v-pagination">
    <span class="v-pagination-prve" :class="{disabled:currentPage === 1}" @click="onClickPrve(currentPage)">
      <v-icon name="left"></v-icon>
    </span>
    <template class="" v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="v-pagination-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <span class="v-pagination-item ellipsis">
          <v-icon name="dots"></v-icon>
        </span>
      </template>
      <template v-else>
        <span class="v-pagination-item" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="v-pagination-next" :class="{disabled: currentPage===totalPage}" @click="onClickNext(currentPage)">
      <v-icon name="right"></v-icon>
    </span>
  </div>
</template>

<script>
  import vIcon from '../../icon/index'

  export default {
    name: 'vPagination',
    components: {vIcon},
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      hideIfOnePage: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      pages() {
        //Array Format 页码格式
        let arrayFormat = [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2]
        //对Array Format排序,去重
        if (this.currentPage <= 4) {
          arrayFormat = [1, 2, 3, 4, 5, 6, 7, this.currentPage + 1, this.currentPage + 2, this.totalPage]
        }
        if (this.currentPage >= this.totalPage - 3) {
          arrayFormat = [1, this.totalPage, this.currentPage, this.totalPage - 1, this.totalPage - 2, this.totalPage - 3, this.totalPage - 4, this.totalPage - 5, this.totalPage - 6]
        }
        arrayFormat = arrayFormat.filter((n) => n >= 1 && n <= this.totalPage)
        let array = this.unique(arrayFormat.sort((a, b) => a - b))
        let pages = array.reduce((prev, current, index, array) => {
          prev.push(current)
          let length = prev.length
          if (prev[length - 2] && current - prev[length - 2] > 1) {
            prev.splice(prev.length - 1, 0, '...')
          }
          return prev
        }, [])
        return pages
      }
    },
    methods: {
      unique(arr) {
        // return[...new Set(arr)] Set兼容性不好
        let obj = {}
        arr.map((item) => {
          obj[item] = true
        })
        return Object.keys(obj).map((str) => {
          return JSON.parse(str)
        })
      },
      onClickPrve(page) {
        if (page > 1 && page <= this.totalPage) {
          this.$emit('update:currentPage', page - 1)
        }
      },
      onClickNext(page) {
        if (page >= 1 && page < this.totalPage) {
          this.$emit('update:currentPage', page + 1)
        }
      },
      onClickPage(page) {
        if (page >= 1 && page <= this.totalPage) {
          this.$emit('update:currentPage', page)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/var";

  .v-pagination {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    &-item {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      margin: 0 10px;
      min-width: 40px;
      min-height: 36px;
      border: 1px solid #eee;
      border-radius: $border-radius;
      color: #bdc3c7;
      cursor: pointer;

      &.current {
        color: #55efc4;
        background: #dff9fb;
        cursor: default;
      }

      &.ellipsis {
        cursor: default;
        fill: #bdc3c7;
      }

      &:hover {
        border-color: #dff9fb;
        color: #55efc4;
      }
    }

    &-prve, &-next {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 40px;
      min-height: 36px;
      padding: 4px;
      border-radius: $border-radius;
      border: 1px solid #eee;
      cursor: pointer;
      fill: #95a5a6;

      &:hover {
        border-color: #dff9fb;
        fill: #55efc4;
      }

      &.disabled {
        cursor: default;
        background: #ecf0f1;

        svg {
          fill: #bdc3c7;
        }
      }
    }
  }
</style>