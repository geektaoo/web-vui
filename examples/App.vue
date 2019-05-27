<template>
  <div id="app">
    <v-upload></v-upload>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
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
    width: 600px;
    border: 1px solid red;
  }
</style>
