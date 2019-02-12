<template>
  <div class="v-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validate = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!["span", "offset"].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: "VCol",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      phone: {type: Object, validate: validate},
      ipad: {type: Object, validate: validate},
      npc: {type: Object, validate: validate},
      pc: {type: Object, validate: validate},
      wpc: {type: Object, validate: validate},
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colStyle() {
        let {gutter} = this
        return (
          gutter && {
            marginLeft: gutter / 2 + "px",
            marginRight: gutter / 2 + "px"
          }
        )
      },
      colClass() {
        let {span, offset, phone, ipad, npc, pc, wpc} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ...(phone ? [`col-phone-${phone.span}`] : []),
          ...(ipad ? [`col-ipad-${ipad.span}`] : []),
          ...(npc ? [`col-npc-${npc.span}`] : []),
          ...(pc ? [`col-pc-${pc.span}`] : []),
          ...(wpc ? [`col-wpc-${wpc.span}`] : [])
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-col {
    box-sizing: border-box;

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
    /*
      手机小于576px样式设置
    */
    @media (max-width: 576px) {
      $class: col-phone-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class: offset-phone-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    /*
     ipad小于 768px样式设置
    */
    @media (min-width: 577px) and (max-width: 768px) {
      $class: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    /*
     窄pc(narrow-pc)小于992px设置
    */
    @media (min-width: 769px) and (max-width: 992px) {
      $class: col-npc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class: offset-npc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    /*
     普通pc(pc)小于992px设置样式
    */
    @media (min-width: 993px) and (max-width: 1200px) {
      $class: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    /*
      宽pc(wpc)样式设置
    */
    @media (min-width: 1201px) {
      $class: col-wpc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class: offset-wpc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>
