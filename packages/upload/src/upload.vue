<template>
  <div class="v-upload">
    <div class="input-box">
      <label for="upload-input"></label>
      <input id="upload-input" type="file" ref="input" @change="handleChange">
      <v-icon class="icon" name="upload" size="size-3x"></v-icon>
      <div class="icon-close" v-show="status" @click="deleteImg">
        <v-icon name="close" size="size-2x"></v-icon>
      </div>
      <div class="img-box">
        <img id="preview" src="" alt="" ref="img">
      </div>
    </div>
    <v-button class="upload-btn" size="4x" @click="onUpload">上传</v-button>
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
      getFiles() {
        return this.$refs.input.files
      },
      handleChange() {
        let fileList = this.getFiles()
        this.imgPreview(fileList)
      },
      imgPreview(fileList) {
        let preview = document.getElementById('preview')
        let file = fileList[0]
        const fileReader = new FileReader()
        if (file && file.type.match('image.*')) {
          fileReader.readAsDataURL(file)
        }
        fileReader.addEventListener('load', () => {
          preview.src = fileReader.result
          this.status = true
        })
      },
      ajaxUpload(fileList) {
        let file = fileList[0]
        const formData = new FormData()
        formData.append('file', file)
        let xhr = new XMLHttpRequest()
        xhr.open('post', 'http://localhost:3000/upload')
        xhr.onload = () => {
          console.log('图片上传成功')
        }
        xhr.onerror = () => {
          console.log('error', '失败了')
        }
        xhr.send(formData)
      },
      onUpload() {
        let fileList = this.getFiles()
        this.ajaxUpload(fileList)
      },
      deleteImg() {
        this.$refs.input.value = ''
        this.$refs.img.src = ''
        this.status = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-upload {
    display: inline-flex;
    flex-direction: column;

    .input-box {
      position: relative;
      width: 260px;
      height: 150px;
      background: #4b4b4b;
      border-radius: 4px;
      border: 1px solid #4b4b4b;

      input {
        display: none;
      }

      label {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        z-index: 10;
        cursor: pointer;
      }

      .icon {
        fill: #7efff5;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .icon-close {
        position: absolute;
        top: 10px;
        right: 10px;
        fill: #fff;
        z-index: 11;
        cursor: pointer;

        &:hover {
          fill: #7efff5;
        }
      }

      .img-box {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        z-index: 2;

        img {
          position: relative;
          max-width: 100%;
        }
      }
    }

    .upload-btn {
      margin-top: 20px;
    }
  }
</style>