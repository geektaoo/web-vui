<template>
  <div class="box">
    <v-row>
      <v-col class="col">8</v-col>
      <v-col class="col">8</v-col>
      <v-col class="col">8</v-col>
    </v-row>
    <v-row>
      <v-col span="10" class="col">10</v-col>
      <v-col span="14" class="col">14</v-col>
    </v-row>
    <v-row>
      <v-col span="10" class="col">10</v-col>
      <v-col span="8" offset="6" class="col">8</v-col>
    </v-row>
    <v-row gutter="30">
      <v-col span="5" class="col">5</v-col>
      <v-col span="5" class="col">5</v-col>
      <v-col span="6" class="col">6</v-col>
      <v-col span="8" class="col">8</v-col>
    </v-row>
  </div>
</template>

<script>
  import Row from '../../../packages/grid/src/row'
  import Col from '../../../packages/grid/src/col'

  export default {
    name: "demo-grid",
    components: {
      'v-row': Row,
      'v-col': Col
    }
  }
</script>

<style scoped>
  .box {
    background: #eee;
  }

  .col {
    height: 30px;
    background: #3eaf7c;
    width: 50%;
    text-align: center;
    border: 1px solid white;
  }
</style>