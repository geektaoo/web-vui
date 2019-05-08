<template>
  <div class="v-pagination">
    <span class="v-pagination-" v-for="page in pages">
      {{page}}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'vPagination',
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
    data() {
      //页码显示，第一页，最后一页，当前页，当前-1，当前-2，当前+1，当前+2
      let pages = [1, this.totalPage, this.currentPage, this.currentPage - 1,this.currentPage + 1]
      let n = this.unique(pages.sort((a, b) => a - b))
      let n2 = n.reduce((prev, current, index, array) => {
        prev.push(current)
        if (array[index + 1] !== 'undefined' && array[index + 1] - array[index] > 1) {
          prev.push('...')
        }
        return prev
      }, [])
      return {
        pages: n2
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-pagination {

  }
</style>