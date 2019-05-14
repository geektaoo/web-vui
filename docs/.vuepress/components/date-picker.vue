<template>
  <div class="demo">
    <v-date-picker v-model="time"></v-date-picker>
  </div>
</template>

<script>
  import Vue from 'vue'
  import datePicker from '../../../packages/datePicker/index'

  Vue.use(datePicker)
  export default {
    name: 'datePicker',
    data() {
      return {
        time: new Date()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .demo {
    width: 280px;
    margin: 20px;

    th, td {
      padding: 0;
      margin: 0;
    }

    tr {
      border: none !important;
    }

    table {
      display: table !important;
    }
  }
</style>