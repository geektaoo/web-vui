<template>
  <div id="app">
    <v-button class="button" size="2x">按钮</v-button>
    <v-button class="button" size="3x">按钮</v-button>
    <v-button class="button" size="4x">按钮</v-button>
    <v-button class="button" >按钮</v-button>
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
    background: indianred;
  }
  .button{
    margin: 10px 20px;
  }
</style>
