<template>
  <div class="v-pagination"></div>
</template>

<script>
  export default {
    name: 'vPagination',
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage:{
        type:Number,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>