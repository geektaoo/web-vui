<template>
  <div class="demo">
    <v-collapse single>
      <v-collapse-item title="刘亦菲" name="title1">
        刘亦菲（1987年8月25日－），曾用名安风、刘茜美子，美籍华人，中国大陆女演员
      </v-collapse-item>
      <v-collapse-item title="关晓彤" name="title2">
        关晓彤（1997年9月17日－），中国大陆女演员，出生于北京，满族人，满姓为瓜尔佳氏
      </v-collapse-item>
      <v-collapse-item title="李沁" name="title3">
        李沁（1990年9月27日－），江苏昆山人，中国女演员，自小学习昆曲
      </v-collapse-item>
    </v-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../packages/collapse/src/collapse'
  import collapseItem from '../../../packages/collapse/src/collapse-item'

  export default {
    name: 'collapse-single-demo',
    components: {
      'v-collapse': Collapse,
      'v-collapse-item': collapseItem
    }
  }
</script>

<style scoped>

</style>