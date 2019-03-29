<template>
  <div class="v-confirm" v-if="isShow">
    <div class="confirm-info">
      <div class="confirm-title" v-text="title"></div>
      <div class="close-btn" @click="onClose"><v-icon  name="error"></v-icon></div>
      <div class="confirm-content" v-text="content"></div>
      <div class="confirm-footer">
        <v-button class="cancle-btn" @click="onClick('cancle')" v-if="confirmType === 'confirm'">{{cancleText}}</v-button>
        <v-button class="confirm-btn" @click="onClick('confirm')">{{confirmText}}</v-button>
      </div>
    </div>
  </div>
</template>

<script>
  import vButton from '../../button/src/button'
  import vIcon from '../../icon/src/icon'

  export default {
    name: 'vConfirm',
    components: {
      vButton,
      vIcon
    },
    data(){
      return{
        promiseStatus:null,
        isShow:false
      }
    },
    props:{
      confirmType:{
        type:String,
        default:'confirm',
        validate(value) {
          return ['confirm','alert'].includes(value)
        }
      },
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
    },
    methods:{
      confirm(){
        this.isShow = true
        return new Promise((resolve, reject) => {
          this.promiseStatus = { resolve, reject }
        })
      },
      onClick(type){
        if (type === 'confirm'){
          this.isShow = false
          this.promiseStatus && this.promiseStatus.resolve()
        }else {
          this.isShow = false
          this.promiseStatus && this.promiseStatus.reject()
        }
      },
      onClose(){
        this.isShow = false
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
      >.close-btn{
        fill: #eeeeee;
        cursor: pointer;
        position: absolute;
        right: 20px;
        &:hover{
          fill: #999999;
        }
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
          margin-left: 16px;
        }
      }
    }
  }
</style>