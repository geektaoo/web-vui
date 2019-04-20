<template>
  <div class="button">
    <v-button>按钮</v-button>
  </div>
</template>

<script>
  import Button from '../../../packages/button/src/button'
  export default {
    name: 'button',
    components:{
      'v-button':Button
    }
  }
</script>

<style scoped>

</style>