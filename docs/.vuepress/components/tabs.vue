<template>
  <div class="demo">
    <v-tabs :selected.sync="selectedName" style="">
      <v-tabs-nav>
        <v-tabs-item name="society">社会</v-tabs-item>
        <v-tabs-item name="science" disabled>科技</v-tabs-item>
        <v-tabs-item name="finance">财经</v-tabs-item>
        <v-tabs-item name="sport">运动</v-tabs-item>
        <v-tabs-item name="gakki">美女</v-tabs-item>
        <v-tabs-item name="liuyifei">经济</v-tabs-item>
      </v-tabs-nav>
      <v-tabs-body>
        <v-tabs-pane name="society">这是社会的新闻</v-tabs-pane>
        <v-tabs-pane name="science">这是科技的新闻</v-tabs-pane>
        <v-tabs-pane name="finance">这是财经的新闻</v-tabs-pane>
        <v-tabs-pane name="sport">这是运动的新闻</v-tabs-pane>
        <v-tabs-pane name="gakki">
          <img src="../../../examples/assets/gakki.jpg" alt="">
        </v-tabs-pane>
        <v-tabs-pane name="liuyifei">
          <img src="../../../examples/assets/liuyifei.jpg" alt="">
        </v-tabs-pane>
      </v-tabs-body>
    </v-tabs>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vTabs from '../../../packages/tabs/index'
  Vue.use(vTabs)
  export default {
    name: 'tabs',
    // components:{vTabs},
    data(){
      return{
        selectedName:'society',
      }
    }
  }
</script>

<style scoped>
  .demo {
    margin: 20px;
    width: 600px;
    border: 1px solid #eee;
  }
</style>