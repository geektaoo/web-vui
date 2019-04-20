<template>
  <div class="button-demo">
    <v-button icon="setting">按钮</v-button>
    <v-button icon="setting" position="right">按钮</v-button>
  </div>
</template>

<script>
  import Button from '../../../packages/button/index'
  export default {
    name: 'button-position-demo',
    components:{
      'v-button':Button
    }
  }
</script>

<style scoped>
.button-demo{
  margin: 10px;
}
</style>