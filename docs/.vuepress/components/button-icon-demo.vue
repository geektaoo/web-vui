<template>
  <div class="button-demo">
    <v-button icon="loading">按钮</v-button>
    <v-button icon="setting">按钮</v-button>
    <v-button icon="success">按钮</v-button>
    <v-button icon="info">按钮</v-button>
    <v-button is-loading>按钮</v-button>
  </div>
</template>

<script>
  import Button from '../../../packages/button/index'
  export default {
    name: 'button-icon-demo',
    components:{
      'v-button':Button
    }
  }
</script>

<style scoped>

</style>