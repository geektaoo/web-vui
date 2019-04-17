<template>
  <div class="v-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'vCollapse',
    data(){
      return {
          eventBus:new Vue()
      }
    },
    props:{
      selected:{
        type:String
      },
      single:{
        type: Boolean,
        default:false
      }
    },
    provide(){
        return {
          eventBus: this.eventBus
        }
    },
    mounted() {
      this.eventBus.$emit('update:selected',this.selected)
    }
  }
</script>

<style lang="scss" scoped>
  .v-collapse{
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
  }
</style>