<template>
  <div id="app">
    <v-date-picker v-model="time"></v-date-picker>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        time:new Date()
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style>
  @import "../style/var.scss";

  #app {
    margin-top: 20px;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*display: flex;*/
    /*justify-content: center;*/
  }
</style>
