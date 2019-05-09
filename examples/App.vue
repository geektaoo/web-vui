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
    <v-collapse :selected="selectedArray" style="width: 600px">
      <v-collapse-item title="刘亦菲" name="title1">
        刘亦菲（1987年8月25日－），曾用名安风、刘茜美子，美籍华人，中国大陆女演员
      </v-collapse-item>
      <v-collapse-item title="关晓彤" name="title2">
        关晓彤（1997年9月17日－），中国大陆女演员，出生于北京，满族人
      </v-collapse-item>
      <v-collapse-item title="李沁" name="title3">
        李沁（1990年9月27日－），江苏昆山人，中国女演员
      </v-collapse-item>
    </v-collapse>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        selectedArray:['title1','title2']
      }
    },
    created() {
    }
  }
</script>

<style>
  @import "../style/var.scss";

  #app {
    margin-top: 30px;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    margin: 30px auto;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
