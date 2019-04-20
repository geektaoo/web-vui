<template>
  <div class="icon-size">
    <v-icon name="loading" size="size-2x"></v-icon>
    <v-icon name="loading" size="size-3x"></v-icon>
    <v-icon name="loading" size="size-4x"></v-icon>
  </div>
</template>

<script>
  import Icon from '../../../packages/icon/src/icon'
  export default {
    name: 'icon-size',
    components:{
      'v-icon':Icon
    }
  }
</script>

<style scoped>
.icon-size{
  padding: 16px;
}
</style>