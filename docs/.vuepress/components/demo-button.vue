<template>
    <div>
        <w-button iconName="setting">按钮</w-button>
        <w-button iconName="loading" :isLoading="true">按钮</w-button>
        <w-button disabled>按钮</w-button>
    </div>
</template>

<script>
  import Button from '../../../packages/button/src/button'
  export default {
    name: "demo-button",
    components:{
      'w-button':Button
    }
  }
</script>

<style scoped>

</style>