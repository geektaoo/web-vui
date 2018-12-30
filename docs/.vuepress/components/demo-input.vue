<template>
    <div>
        <v-input  value="张三"></v-input>
        <br>
        <v-input placeholder="请输入你的名字"></v-input>
        <br>
        <v-input :disabled="true"></v-input>
        <br>
        <v-input error="姓名不能少于三个字" value="张三" @input="inInput"></v-input>
        <br>
        <v-input :success="true" value="张三"></v-input>
        <br>
        <v-input v-model="msg" placeholder="支持v-model"></v-input>
        <span>{{msg}}</span>
    </div>
</template>

<script>
  import Input from '../../../packages/input/src/input'
  export default {
    name: "demo-input",
    data() {
      return {
        msg:''
      }
    },
    components:{
      'v-input':Input
    }
  }
</script>

<style scoped>

</style>