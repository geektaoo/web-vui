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
    <v-input value="张三"></v-input>
    <v-input :disabled="true" value="张三"></v-input>
    <div class="box">
      <v-row>
        <v-col class="col" span="2"
               :phone="{span:24}"
               :ipad="{span:8}"
               :npc="{span:4}"
               :pc="{span:2}"
               :wpc="{span:1}"
        >2</v-col>
        <v-col class="col" span="22"
               :phone="{span:24}"
               :ipad="{span:16}"
               :npc="{span:20}"
               :pc="{span:22}"
               :wpc="{span:23}"
        >22</v-col>
      </v-row>
      <v-row>
        <v-col class="col" span="6">6</v-col>
        <v-col class="col" span="16" offset="2">18</v-col>
      </v-row>
      <v-row>
        <v-col class="col" span="3">6</v-col>
        <v-col class="col" span="16" offset="5">18</v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      add: function (value) {
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
  .box{
    border: 1px solid blue;
  }
  .col{
    box-sizing: border-box;
    height: 30px;
    background: #3eaf7c;
    border: 1px solid red;
    width: 50%;
  }
</style>
