<template>
  <div id="app">
    <v-collapse :selected.sync="selectedName" single>
      <v-collapse-item title="标题1" name="title1">内容1</v-collapse-item>
      <v-collapse-item title="标题2" name="title2">内容2</v-collapse-item>
      <v-collapse-item title="标题3" name="title3">内容三</v-collapse-item>
    </v-collapse>
    {{selectedName}}
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return{
        selectedName:['title1','title2']
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
</style>
