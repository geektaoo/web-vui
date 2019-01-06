<template>
  <div class="v-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "VCol",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colStyle() {
        let {gutter} = this
        return {
          marginLeft: gutter / 2 + 'px', marginRight: gutter / 2 + 'px'
        }
      },
      colClass() {
        let {span, offset} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-col {
    width: 50%;
    height: 100px;
    border: 1px solid red;
    background: #3eaf7c;
  }

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
</style>