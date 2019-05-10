<template>
  <div class="demo">
    <v-input v-model="value" placeholder="请输入内容" disabled></v-input>
  </div>
</template>

<script>
  import vInput from '../../../packages/input/index'
  export default {
    name: 'input-disabled',
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