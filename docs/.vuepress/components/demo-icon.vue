<template>
    <div>
        <v-icon name="success"></v-icon>
        <v-icon name="error"></v-icon>
        <v-icon name="info"></v-icon>
        <v-icon name="left"></v-icon>
        <v-icon name="right"></v-icon>
        <v-icon name="setting"></v-icon>
        <v-icon name="down"></v-icon>
        <v-icon name="download"></v-icon>
        <v-icon name="good"></v-icon>
        <v-icon name="loading"></v-icon>
    </div>
</template>

<script>
    import Icon from '../../../packages/icon/src/icon'
  export default {
    name: "demo-icon",
    components:{
    'v-icon':Icon
    },
  }
</script>

<style scoped>

</style>