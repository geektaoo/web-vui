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
        this.$toast({
          content:'这是一个toast',
          autoClose: false,
          showClose: true,
          onClose(){
            console.log("我已经知道他关闭了")
          }
        })
      },
      showConfirm(){
        this.$confirm({
          title:'通知',
          content:'这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息'
        }).then(()=>{
          this.$toast({
            content:"成功了",
            autoClose: true
          })
        }).catch(()=>{
          this.$toast({
            content:"失败了",
            autoClose:true
          })
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
