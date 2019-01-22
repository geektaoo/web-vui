<template>
  <div class="box">
    <v-row>
      <v-col class="col" span="8">8</v-col>
      <v-col class="col" span="8">8</v-col>
      <v-col class="col" span="8">8</v-col>
    </v-row>
  </div>
</template>

<script>
  import Row from '../../../../packages/grid/src/row'
  import Col from '../../../../packages/grid/src/col'

  export default {
    name: "Base",
    components: {
      'v-row': Row,
      'v-col': Col
    }
  }
</script>

<style scoped>
  .box {
    /*width: 100%;*/
    background: #eee;
    /*box-sizing: border-box;*/
  }

  .col:nth-child(odd) {
    background: #3eaf7c;
  }
  .col:nth-child(even) {
    background: #67cdcc;
  }
  .col {
    height: 30px;
    text-align: center;
  }
</style>