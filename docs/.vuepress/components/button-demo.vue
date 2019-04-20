<template>
  <div class="v-button">
    <v-button class="button">按钮</v-button>
    <v-button class="button" size="2x">按钮</v-button>
    <v-button class="button" size="3x">按钮</v-button>
    <v-button class="button" size="4x">按钮</v-button>
  </div>
</template>

<script>
  import Button from '../../../packages/button/index'
  export default {
    name: 'vButton',
    components:{
      'v-button':Button
    }
  }
</script>

<style scoped>
  .button{
    margin: 10px 20px;
  }
</style>