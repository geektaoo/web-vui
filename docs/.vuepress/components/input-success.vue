<template>
  <div class="demo">
    <v-input v-model="value" placeholder="请输入姓名" success></v-input>
  </div>
</template>

<script>
  import vInput from '../../../packages/input/index'
  export default {
    name: 'input-success',
    components:{vInput},
    data(){
      return{
        value:'刘亦菲'
      }
    }
  }
</script>

<style scoped>
  .demo{
    margin: 20px;
  }
</style>