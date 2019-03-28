<template>
  <div id="app">
    <v-button @click="showToast">点我</v-button>
    <v-button @click="showConfirm">点击</v-button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      showToast () {
        this.$toast(`这是${parseInt(Math.random()*100)},个toast`,{
          showClose:{
            text:'关闭按钮',
            callback(){
              console.log('用户说知道了')
            }
          },
          position:'right'
        })
      },
      showConfirm(){
        // console.log(111)
        this.$confirm({
          title:'通知',
          content:'这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息'
        }).then(()=>{
          this.$toast('成功了')
        }).catch(()=>{
          this.$toast("失败了")
        })
      }
    }
  }
</script>

<style>
  #app {
  margin-top: 60px;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
