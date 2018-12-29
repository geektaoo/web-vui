<template>
    <div>
        <v-button :isLoading="true">按钮</v-button>
        <v-button iconName="setting">按钮</v-button>
        <v-button iconName="setting" iconPosition="right">按钮</v-button>
        <v-button disabled>按钮</v-button>
    </div>
</template>

<script>
  import Button from '../../../packages/button/src/button'
  export default {
    name: "demo-button",
    components:{
      'v-button':Button
    }
  }
</script>

<style scoped>

</style>