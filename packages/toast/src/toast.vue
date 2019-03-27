<template>
  <transition name="fate">
    <div class="v-toast">
      <slot></slot>
      <span class="close-btn" v-if="showClose" @click="onClickClose">
        {{showClose.text}}
      </span>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'VToast',
    props:{
      autoClose:{
        type:Boolean,
        default:false
      },
      duration:{
        type: Number,
        default: 4000
      },
      showClose:{
        type:Object,
        default(){
          return {
            text:'关闭',callback:undefined
          }
        }
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(()=>{
          this.close()
        },this.duration)
      }
    },
    methods:{
      close(){
        this.$el.remove()
        this.$destroy()
      },
      onClickClose(){
        this.close()
        if (this.showClose && typeof this.showClose.callback === 'function'){
          this.showClose.callback()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../global";
  $content-font-size: 14px;
  $close-btn-size: 10px;
  $position-offset: 8px;
  $toast-padding: 10px;
  $border-radius-middle: 4px;
  $toast-bg: #3eaf7c;
  $font-color: #fff;
  .v-toast {
    display: flex;
    align-items: center;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 2px 12px #a8abaf;
    color: $font-color;
    background: $toast-bg;
    font-size: $content-font-size;
    padding: $toast-padding;
    border-radius: $border-radius-middle;
    .close-btn{
      margin-left: 16px;
      padding-left: 8px;
      cursor: pointer;
      border-left: 1px solid #fff;
      flex-shrink: 0;
    }
  }

  .fate-enter-active {
    transition: opacity .3s,transform .3s,left .3s,right .3s,top .3s,bottom .3s;
  }

  .fate-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fate-enter,
  .fate-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>



