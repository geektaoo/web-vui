<template>
  <div id="app">
    <v-icon class="red" name="loading" size="size-4x"></v-icon>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return{
        
      }
    },
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
  .red{
    fill:red;
  }
</style>
