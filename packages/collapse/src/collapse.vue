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
      //内部通知--外部默认值是什么
      this.eventBus.$emit('update:selected',this.selected)
      //同时监听子元素的变化，向外通知默认值的变化---.sync使用
      this.eventBus.$on('update:selected',(name)=>{
        this.$emit('update:selected',name)
      })
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