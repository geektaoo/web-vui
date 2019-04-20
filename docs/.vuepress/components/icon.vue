<template>
  <div class="icon">
    <v-icon name="loading"></v-icon>
    <v-icon name="error"></v-icon>
    <v-icon name="info"></v-icon>
    <v-icon name="setting"></v-icon>
    <v-icon name="good"></v-icon>
  </div>
</template>

<script>
  import Icon from '../../../packages/icon/src/icon'
  export default {
    name: 'icon',
    components:{
      'v-icon':Icon
    }
  }
</script>

<style scoped lang="scss">
  .icon{
    padding: 16px;
  }
</style>