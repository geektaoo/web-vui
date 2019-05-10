<template>
  <div class="demo">
    <v-button @click="onClick">点击</v-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Button from '../../../packages/button/src/button'
  import Comfirm from '../../../packages/confirm/index'

  Vue.use(Comfirm)
  export default {
    name: 'confirm-demo',
    components: {
      'v-button': Button
    },
    methods: {
      onClick() {
        this.$confirm({
          title: '通知',
          content: '刘亦菲回来了，你要不要去见她？',
          confirmText: '好的，我知道了',
          cancleText: '我不想见她'
        }).then(() => {
          console.log('我知道他点击了确定按钮了')
        })
          .catch(() => {
            console.log('我知道他点击了取消按钮')
          })
      }
    }
  }
</script>

<style scoped>
  .demo{
    margin: 14px;
  }
</style>