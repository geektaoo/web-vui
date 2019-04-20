<template>
  <div class="button-demo">
    <v-button disabled>按钮</v-button>
  </div>
</template>

<script>
  import Button from '../../../packages/button/index'
  export default {
    name: 'button-disabled-demo',
    components:{
      'v-button':Button
    }
  }
</script>

<style scoped>

</style>