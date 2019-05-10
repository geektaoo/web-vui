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
    name: 'toast',
    components: {vButton},
    methods: {
      onclick(){
        this.$toast({
          content:'这是一段内容',
          showClose: true,
          position:'right',
          onClose(){
            alert('我要关闭了')
          }
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