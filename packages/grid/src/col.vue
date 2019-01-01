<template>
    <div class="v-col">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "VCol"
  }
</script>

<style scoped lang="scss">
.v-col {
    width: 50%;
    height: 100px;
    border: 1px solid red;
}
</style>