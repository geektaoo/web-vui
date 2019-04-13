<template>
  <div id="app">
    <v-button @click="showToast">点我</v-button>
    <v-button @click="showConfirm">点击</v-button>
    <v-button @click="isToggle">切换</v-button>
    <v-tabs :selected.sync="selectTab">
      <v-tabs-nav>
        <template slot="action">
          <v-button>设置</v-button>
        </template>
        <v-tabs-item name="society">社会</v-tabs-item>
        <v-tabs-item name="science">科技</v-tabs-item>
        <v-tabs-item name="finance">财经</v-tabs-item>
      </v-tabs-nav>
      <v-tabs-content>
        <v-tabs-pane name="society">这是社会的新闻</v-tabs-pane>
        <v-tabs-pane name="science">这是科技的新闻</v-tabs-pane>
        <v-tabs-pane name="finance">这是财经的新闻</v-tabs-pane>
      </v-tabs-content>
    </v-tabs>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        isShow: false,
        selectTab:''
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
    text-align: center;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
