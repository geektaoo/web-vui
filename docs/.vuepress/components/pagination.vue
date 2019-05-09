<template>
  <div class="demo">
    <v-pagination :current-page.sync="currentPage" :total-page="7"></v-pagination>
  </div>
</template>

<script>
  import vPagination from '../../../packages/pagination/index'

  export default {
    name: 'pagination',
    components: {vPagination},
    data() {
      return {
        currentPage: 1
      }
    }
  }
</script>

<style scoped>
  .demo {
    margin: 20px;
  }
</style>