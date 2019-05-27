<template>
  <div class="v-upload">
    <div class="file-list"></div>
    <div class="upload-btn"></div>
    <input type="file">
  </div>
</template>

<script>
  import vIcon from '../../icon/index'
  import vButton from '../../button/index'

  export default {
    name: 'vUpload',
    components: {vIcon, vButton},
    props: {},
    data() {
      return {
        status: false
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .v-upload {
    display: inline-flex;
    flex-direction: column;
  }
</style>