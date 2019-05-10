<template>
  <div class="v-slides"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave"
  >
    <div class="v-slides-window">
      <div class="v-slides-wrapper">
        <div class="v-slides-next" @click="nextSlide">
          <v-icon name="right" size="size-2x"></v-icon>
        </div>
        <div class="v-slides-pre" @click="preSlide">
          <v-icon name="left" size="size-2x"></v-icon>
        </div>
        <slot></slot>
      </div>
    </div>
    <div class="v-slides-dot">
      <span v-for="(n,index) in childrenLength"
            :key="index"
            :class="{active:nowSelectedIndex === n - 1}"
            @click="changeSlide(n - 1)"
      ></span>
    </div>
  </div>
</template>

<script>
  import vIcon from '../../icon/index'

  export default {
    name: 'vSlides',
    components: {vIcon},
    props: {
      selected: {type: String},
      autoPlay: {type: Boolean, default: false}
    },
    data() {
      return {
        childrenLength: 0,
        lastSelectedIndex: undefined,
        timeId: undefined
      }
    },
    mounted() {
      //把当前的selected的值传给子组件
      this.childrenLength = this.childrenItem.length
      this.lastSelectedIndex = this.nowSelectedIndex
      this.updateChildrenSelected()
      if (this.autoPlay === true) {
        this.autoPlaySlide()
      }
    },
    updated() {
      //属性发生更新就会触发
      this.updateChildrenSelected()
    },
    computed: {
      childrenItem() {
        return this.$children.filter(vm => vm.$options.name === 'vSlidesItem')
      },
      getChildrenAllNames() {
        return this.childrenItem.map(vm => vm.name)
      },
      nowSelectedIndex() {
        return this.selected && this.getChildrenAllNames.indexOf(this.selected) || 0
      }
    },
    methods: {
      getSelected() {
        let firstChildren = this.childrenItem[0]
        return this.selected || firstChildren.name
      },
      updateSelected(newIndex) {
        //index代表的是当前选中selected的索引
        this.lastSelectedIndex = this.nowSelectedIndex
        if (newIndex === -1) {
          newIndex = this.childrenItem.length - 1
        }
        if (newIndex === this.childrenItem.length) {
          newIndex = 0
        }
        this.$emit('update:selected', this.getChildrenAllNames[newIndex])
      },
      updateChildrenSelected() {
        let selected = this.getSelected()
        this.childrenItem.forEach(vm => {
          let reverse = this.nowSelectedIndex > this.lastSelectedIndex ? false : true
          if (this.lastSelectedIndex === this.childrenItem.length - 1 && this.nowSelectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.nowSelectedIndex === this.childrenItem.length - 1) {
            reverse = true
          }
          vm.reverse = reverse
          this.$nextTick(() => {
            vm.selected = selected
          })
        })
      },
      autoPlaySlide() {
        if (this.timeId) {
          return
        }
        let run = () => {
          let index = this.getChildrenAllNames.indexOf(this.getSelected())
          let newIndex = index + 1
          if (newIndex === this.getChildrenAllNames.length) {
            newIndex = 0
          }
          if (newIndex === -1) {
            newIndex = this.getChildrenAllNames.length - 1
          }
          this.updateSelected(newIndex)//告诉外界选中的时newIndex
          this.timeId = setTimeout(run, 3000)
        }
        if (this.autoPlay === true) {
          this.timeId = setTimeout(run, 3000)//用setTimeout模拟setInterval
        }
      },
      onMouseEnter() {
        //鼠标滑入暂定动画
        this.pause()
        this.timeId = undefined
      },
      onMouseLeave() {
        //鼠标滑出，动画继续
        this.autoPlaySlide()
      },
      pause() {
        window.clearTimeout(this.timeId)
      },
      changeSlide(index) {
        this.updateSelected(index)
      },
      nextSlide() {
        this.changeSlide(this.nowSelectedIndex + 1)
      },
      preSlide() {
        this.changeSlide(this.nowSelectedIndex - 1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-slides {
    position: relative;
    cursor: pointer;

    > .v-slides-window {
      overflow: hidden;

      > .v-slides-wrapper {
        position: relative;

        > .v-slides-next {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;

          > .v-icon {
            fill: #fff;
          }

          > .v-icon:hover {
            fill: #3eaf7c;
          }
        }

        > .v-slides-pre {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;

          > .v-icon {
            fill: #fff;
          }

          > .v-icon:hover {
            fill: #3eaf7c;
          }
        }
      }
    }

    > .v-slides-dot {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);

      > span {
        cursor: pointer;
        background: #fff;
        margin: 0 10px;
        opacity: 0.8;
        display: inline-block;
        width: 20px;
        height: 8px;
        border-radius: 4px;
        transition: all 1s;
      }

      > span.active {
        background: #3eaf7c;
        opacity: 1;
      }
    }
  }
</style>