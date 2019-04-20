<template>
  <div id="app">
    <v-collapse :selected="selectedNmae">
      <v-collapse-item title="美女" name="title4">这是美女的新闻</v-collapse-item>
      <v-collapse-item title="社会" name="title5">这是社会的新闻</v-collapse-item>
      <v-collapse-item title="颜色" name="title6">这是一群颜色的集合</v-collapse-item>
    </v-collapse>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        selectedNmae:['title4','title5']
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

  .tabs {
    margin: auto;
    width: 600px;
    border: 1px solid #ccc;
    position: relative;
  }

  body {
    border: 1px solid red;
  }

  .red {
    background: indianred;
  }

  .button {
    margin: 10px 20px;
  }
</style>
