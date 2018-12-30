<template>
  <div id="app">
    <v-button :isLoading="true">按钮</v-button>
    <v-icon name="setting"></v-icon>
    <v-button-group>
      <v-button>上一页</v-button>
      <v-button>主页</v-button>
      <v-button>下一页</v-button>
    </v-button-group>
    <br>
    <v-input  value="张三"></v-input>
    <v-input :disabled="true" value="张三"></v-input>
    <v-input value="李四" :readonly="true"></v-input>
    <v-input error="姓名不能少于两个字" value="张三" @input="inInput"></v-input>
    <v-input :success="true" value="张三" @change="inChange"></v-input>
    <v-input placeholder="请输入姓名"></v-input>
    <br>
    <v-input v-model="msg"></v-input>
    <span>{{msg}}</span>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      msg:''
    }
  },
  methods:{
    add:function(value) {
      alert(value)
    },
    inChange(value){
      console.log(value)
    },
    inInput(value){
      console.log(value)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
