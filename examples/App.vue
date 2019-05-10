<template>
  <div id="app">
    <!--
    <v-slides :selected.sync="selected">
      <v-slides-item name="1">
        <div class="box">1</div>
      </v-slides-item>
      <v-slides-item name="2">
        <div class="box">2</div>
      </v-slides-item>
      <v-slides-item name="3">
        <div class="box">3</div>
      </v-slides-item>
      <v-slides-item name="4">
        <div class="box">4</div>
      </v-slides-item>
    </v-slides>
    -->
    <!--
        <v-menu :selected.sync="selected">
          <v-menu-item name="首页">首页</v-menu-item>
          <v-sub-menu name="关于">
            <template slot="title">关于</template>
            <v-menu-item name="团队">团队介绍</v-menu-item>
            <v-menu-item name="学校">学校介绍</v-menu-item>
            <v-sub-menu name="家庭联系">
              <template slot="title">家庭联系</template>
              <v-menu-item name="QQ">QQ联系</v-menu-item>
              <v-menu-item name="wechat">微信联系</v-menu-item>
              <v-sub-menu name="电话方式">
                <template slot="title">电话方式</template>
                <v-menu-item name="移动">移动</v-menu-item>
                <v-menu-item name="联通">联通</v-menu-item>
                <v-menu-item name="电信">电信</v-menu-item>
              </v-sub-menu>
            </v-sub-menu>
          </v-sub-menu>
          <v-menu-item name="前端">前端</v-menu-item>
        </v-menu>

        <hr style="margin-top: 300px">
        <v-menu :selected.sync="selected" vertical>
          <v-menu-item name="首页">首页</v-menu-item>
          <v-sub-menu name="关于">
            <template slot="title">关于</template>
            <v-menu-item name="团队">团队介绍</v-menu-item>
            <v-menu-item name="学校">学校介绍</v-menu-item>
            <v-sub-menu name="家庭联系">
              <template slot="title">家庭联系</template>
              <v-menu-item name="QQ">QQ联系</v-menu-item>
              <v-menu-item name="wechat">微信联系</v-menu-item>
              <v-sub-menu name="电话方式">
                <template slot="title">电话方式</template>
                <v-menu-item name="移动">移动</v-menu-item>
                <v-menu-item name="联通">联通</v-menu-item>
                <v-menu-item name="电信">电信</v-menu-item>
              </v-sub-menu>
            </v-sub-menu>
          </v-sub-menu>
          <v-menu-item name="前端">前端</v-menu-item>
        </v-menu>
    -->
    <v-tabs :selected.sync="selectedName" style="width: 600px;border: 1px solid #eee;">
      <v-tabs-nav>
        <v-tabs-item name="society">社会</v-tabs-item>
        <v-tabs-item name="science" disabled>科技</v-tabs-item>
        <v-tabs-item name="finance">财经</v-tabs-item>
        <v-tabs-item name="sport">运动</v-tabs-item>
        <v-tabs-item name="gakki">美女</v-tabs-item>
        <v-tabs-item name="liuyifei">经济</v-tabs-item>
      </v-tabs-nav>
      <v-tabs-body>
        <v-tabs-pane name="society">

        </v-tabs-pane>
        <v-tabs-pane name="science">这是科技的新闻</v-tabs-pane>
        <v-tabs-pane name="finance">这是财经的新闻</v-tabs-pane>
        <v-tabs-pane name="sport">这是运动的新闻</v-tabs-pane>
        <v-tabs-pane name="gakki">
          <img src="./assets/gakki.jpg" alt="">
        </v-tabs-pane>
        <v-tabs-pane name="liuyifei">
          <img src="./assets/liuyifei.jpg" alt="">
        </v-tabs-pane>
      </v-tabs-body>
    </v-tabs>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        selectedArray: ['title1', 'title2'],
        input : '真相',
        selectedName:'society'
    }
    },
    methods: {}
  }
</script>

<style>
  @import "../style/var.scss";

  #app {
    margin-top: 100px;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
