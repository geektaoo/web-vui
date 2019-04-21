<template>
  <div id="app">
    <v-button @click="onClick">点击</v-button>
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
    methods:{
      onClick(){
        this.$confirm({
          confirmType:'alert',
          title:'通知',
          content:'刘亦菲回归影坛，加盟王力宏自导自演的电影《恋爱通告》',
          confirmText:'知道了',
          cancleText:'不想知道'
        }).then(()=>{
          console.log("点击了知道了")
        })
          .catch(()=>{
            console.log("点击了不知道")
          })
      }
    }
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
