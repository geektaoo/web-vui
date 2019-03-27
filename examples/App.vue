<template>
  <div id="app">
    <v-button @click="showToast">点我</v-button>
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
    created () {

    },
    methods: {
      add: function (value) {
        alert(value)
      },
      showToast () {
        this.$toast("这是一个toast",{
          showClose:{
            text:'关闭按钮',
            callback(){
              console.log('用户说知道了')
            }
          },
          // position:'right'
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
.box {
  border: 1px solid blue;
}
.col {
  box-sizing: border-box;
  width: 50%;
  height: 30px;
  background: #3eaf7c;
  border: 1px solid red;
}
</style>
