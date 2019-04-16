<template>
  <div class="v-collapse-item">
    <div class="title">{{title}}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vCollapseItem',
    props:{
      title:{
        type:String,
        required:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-collapse-item{
    >.title{
      border: 1px solid #ccc;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
    }
  }
</style>