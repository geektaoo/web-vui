<template>
  <div class="v-confirm">
    <div class="confirm-info">
      <div class="confirm-title" v-text="title"></div>
      <div class="confirm-content" v-text="content"></div>
      <div class="confirm-footer">
        <v-button class="confirm-btn" v-text="confirmText"></v-button>
        <v-button class="cancle-btn" v-text="cancleText"></v-button>
      </div>
    </div>
  </div>
</template>

<script>
  import vButton from '../../button/src/button'

  export default {
    name: 'vConfirm',
    components: {
      vButton
    },
    props:{
      title:{
        type:String,
        default:'提示'
      },
      content:{
        type: String,
        default: ''
      },
      confirmText:{
        type:String,
        default:'确定'
      },
      cancleText:{
        type:String,
        default:'取消'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../global";
  .v-confirm {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    >.confirm-info{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 400px;
      background: #fff;
      padding: 16px;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      >.confirm-title{
        font-size: 16px;
        font-weight: bold;
        color: $font-tips-color;
        margin-bottom: 10px;
        text-align: center;
      }
      >.confirm-content{
        font-size: 14px;
        color: #8c8c8c;
        margin-bottom: 10px;
      }
      >.confirm-footer{
        display: flex;
        justify-content: flex-end;
        >.confirm-btn{
          margin-right: 16px;
        }
      }
    }
  }
</style>