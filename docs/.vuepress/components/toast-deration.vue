<template>
  <div class="demo">
    <v-button @click="onclick">点击弹出toast</v-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vButton from '../../../packages/button/index'
  import Toast from '../../../packages/toast/index'

  Vue.use(Toast)
  export default {
    name: 'toast-deration',
    components: {vButton},
    methods: {
      onclick(){
        this.$toast({
          content:'这是一段内容',
          autoClose:true
        })
      }
    }
  }
</script>

<style scoped>
  .demo{
    margin: 20px;
  }
</style>