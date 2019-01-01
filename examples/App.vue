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
    <div>

    </div>
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
