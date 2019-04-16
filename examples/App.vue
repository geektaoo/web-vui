<template>
  <div id="app">
    <v-collapse>
      <v-collapse-item title="标题1">内容1</v-collapse-item>
      <v-collapse-item title="标题2">内容2</v-collapse-item>
      <v-collapse-item title="标题3">内容三</v-collapse-item>
    </v-collapse>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  @import "../packages/global.scss";

  #app {
    margin-top: 300px;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    /*text-align: center;*/
    padding: 100px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .tabs{
    margin: auto;
    width: 600px;
    border: 1px solid #ccc;
    position: relative;
  }
  body{
    border: 1px solid red;
  }
</style>
