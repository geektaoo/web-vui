<template>
  <div class="icon-class">
    <v-icon class="red" name="loading" size="size-3x"></v-icon>
    <v-icon class="green" name="success" size="size-3x"></v-icon>
    <v-icon class="yellow" name="good" size="size-3x"></v-icon>
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

<style scoped>
  .icon-class{
    padding: 16px;
  }
.red{
  fill:red;
}
  .green{
    fill:#4abf8a;
  }
  .yellow{
    fill:greenyellow;
  }
</style>