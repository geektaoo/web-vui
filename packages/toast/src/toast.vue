<template>
  <div class="v-toast"></div>
</template>

<script>
  import Vue from 'vue'
  Vue.prototype.$toast = function () {
    console.log("我是toast")
  }
  export default {
    name: "VToast"
  }
</script>

<style lang="sass" scoped>

</style>


