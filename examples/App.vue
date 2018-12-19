<template>
  <div id="app">
    <w-button></w-button>
    <button @click="add">点击</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods:{
    add:function() {
      alert(1)
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
