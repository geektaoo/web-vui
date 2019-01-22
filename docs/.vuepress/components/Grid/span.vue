<template>
  <div class="box">
    <v-row>
      <v-col span="10" class="col">10</v-col>
      <v-col span="14" class="col">14</v-col>
    </v-row>
  </div>
</template>

<script>
  import Row from '../../../../packages/grid/src/row'
  import Col from '../../../../packages/grid/src/col'

  export default {
    name: "span",
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