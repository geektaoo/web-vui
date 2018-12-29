<template>
    <v-button-group>
        <v-button>上一页</v-button>
        <v-button>主页</v-button>
        <v-button>下一页</v-button>
    </v-button-group>
</template>

<script>
  import Button from '../../../packages/button/src/button'
  import ButtonGroup from '../../../packages/buttonGroup/src/button-group'
  export default {
    name: "button-group.vue",
    components:{
      'v-button-group':ButtonGroup,
      'v-button':Button
    },
  }
</script>

<style scoped>

</style>