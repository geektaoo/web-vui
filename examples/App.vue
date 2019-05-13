<template>
  <div id="app">
    <v-date-picker></v-date-picker>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style>
  @import "../style/var.scss";

  #app {
    margin-top: 100px;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
  }
</style>
