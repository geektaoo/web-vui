<template>
  <div id="app">
    <v-button @click="showToast">点我</v-button>
    <v-button @click="showConfirm">点击</v-button>
    <v-button @click="isToggle">切换</v-button>
    <hr>
    <div class="tabs">
      <v-tabs :selected.sync="selectedName">
        <v-tabs-nav>
          <v-tabs-item name="society" disabled>社会</v-tabs-item>
          <v-tabs-item name="science">科技</v-tabs-item>
          <v-tabs-item name="finance">财经</v-tabs-item>
        </v-tabs-nav>
        <v-tabs-body>
          <v-tabs-pane name="society">这是社会的新闻</v-tabs-pane>
          <v-tabs-pane name="science">这是科技的新闻</v-tabs-pane>
          <v-tabs-pane name="finance"></v-tabs-pane>
        </v-tabs-body>
      </v-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        isShow: false,
        selectedName: 'science'
      }
    },
    methods: {
      showToast() {
        this.$toast({
          content: '这是一个toast',
          autoClose: false,
          showClose: true,
          position: 'top',
          onClose() {
            console.log('我已经知道他关闭了')
          }
        })
      },
      showConfirm() {
        this.$confirm({
          title: '通知',
          content: '这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是一段消息这是',
          confirmType: 'confirm'
        }).then(() => {
          this.$toast({
            content: '成功了',
            autoClose: true
          })
        }).catch(() => {
          this.$toast({
            content: '失败了',
            autoClose: true
          })
        })
      },
      isToggle() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style>
  @import "../packages/global.scss";

  #app {
    margin-top: 60px;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    /*text-align: center;*/

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .tabs{
    margin: auto;
    width: 600px;
    border: 1px solid #ccc;
    position: relative;
  }
</style>
