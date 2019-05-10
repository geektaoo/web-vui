<template>
  <div class="demo">
    <v-popover trigger="hover">
      <v-button>上方弹出</v-button>
      <template slot="content">
        这是一段内容
      </template>
    </v-popover>
    <v-popover position="bottom" trigger="hover">
      <v-button>下方弹出</v-button>
      <template slot="content">
        这是一段内容
      </template>
    </v-popover>
    <v-popover position="left" trigger="hover">
      <v-button>左边弹出</v-button>
      <template slot="content">
        这是一段内容
      </template>
    </v-popover>
    <v-popover position="right" trigger="hover">
      <v-button>右边弹出</v-button>
      <template slot="content">
        这是一段内容
      </template>
    </v-popover>
  </div>
</template>

<script>
  import vButton from  '../../../packages/button/index'
  import vPopover from '../../../packages/popover/index'
  export default {
    name: 'popover-hover',
    components:{vPopover,vButton}
  }
</script>

<style scoped>
  .demo{
    margin: 20px;
  }
</style>