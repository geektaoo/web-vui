<template>
  <div class="demo">
    <v-slides :selected.sync="selected" style="width: 400px;">
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
  </div>
</template>

<script>
  import Vue from 'vue'
  import vSlides from '../../../packages/slides/index'

  Vue.use(vSlides)
  export default {
    name: 'slides',
    data() {
      return {
        selected: '1',
      }
    },
  }
</script>

<style scoped>
  .demo {
    margin: 20px;
  }

  .box {
    width: 400px;
    height: 200px;
    background: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>