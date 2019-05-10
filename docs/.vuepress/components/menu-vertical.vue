<template>
  <div class="demo">
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
  </div>
</template>

<script>
  import Vue from 'vue'
  import Menu from '../../../packages/menu/index'
  Vue.use(Menu)
  export default {
    name: 'menu-vertical',
    data(){
      return{
        selected: "首页",
      }
    }
  }
</script>

<style scoped>
  .demo{
    margin: 20px;
  }
</style>