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
    <br>
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
        this.$toast("这是一个toast")
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
