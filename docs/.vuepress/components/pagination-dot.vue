<template>
  <div class="demo">
    <v-pagination :current-page.sync="currentPage" :total-page="20"></v-pagination>
  </div>
</template>

<script>
  import vPagination from '../../../packages/pagination/index'

  export default {
    name: 'pagination-dot',
    components: {vPagination},
    data() {
      return {
        currentPage: 5
      }
    }
  }
</script>

<style scoped>
  .demo {
    margin: 20px;
  }
</style>