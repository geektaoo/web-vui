<template>
  <div class="demo">
    <v-input type="password" placeholder="请输入密码"></v-input>
  </div>
</template>

<script>
  import vInput from '../../../packages/input/index'
  export default {
    name: 'input-type',
    components:{vInput},
    data(){
      return{
        value:''
      }
    }
  }
</script>

<style scoped>
  .demo{
    margin: 20px;
  }
</style>