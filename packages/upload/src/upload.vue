<template>
  <div class="v-upload">
    <div class="input-box">
      <label for="input"></label>
      <input id="input" type="file">
      <v-icon class="icon" name="upload" size="size-3x"></v-icon>
    </div>
  </div>
</template>

<script>
  import vIcon from '../../icon/index'
  export default {
    name: 'vUpload',
    components:{vIcon}
  }
</script>

<style lang="scss" scoped>
.v-upload{
  display: inline-flex;
  .input-box{
    position: relative;
    width: 200px;
    height: 80px;
    background: #4b4b4b;
    border-radius: 4px;

    input{
      position: absolute;
      left: -1000px;
    }
    label{
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
      z-index: 10;
      cursor: pointer;
    }
    .icon{
      fill:#7efff5;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
}
</style>