<template>
  <div class="v-tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vTabs',
    props:{
      selected:{
        type:String,
        required:true
      },
      direction:{
        type:String,
        default:'horizontal',
        validate(value){
          return ['vertical','horizontal'].includes(value)
        }
      }
    },
    created() {
      // this.$emit('update:selected',xxx)
    }
  }
</script>

<style lang="scss" scoped>
  .v-tabs {

  }
</style>


