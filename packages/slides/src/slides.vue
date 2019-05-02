<template>
  <div class="v-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="v-slides-window">
      <div class="v-slides-wrapper">
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
  import Icon from '../../icon/index'

  export default {
    name: 'vSlides',
    components: {Icon},
    props: {
      selected: {
        type: String
      },
      autoPlay: {
        type: Boolean,
        default: true
      }
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
      this.updateChildrenSelected()
      this.autoPlaySlide()
      this.childrenLength = this.$children.length
      this.lastSelectedIndex = this.nowSelectedIndex
    },
    updated() {
      //属性发生更新就会触发
      this.updateChildrenSelected()
    },
    computed: {
      getChildrenAllNames() {
        return this.$children.map(vm => vm.name)
      },
      nowSelectedIndex() {
        return this.getChildrenAllNames.indexOf(this.selected) || 0
      }
    },
    methods: {
      getSelected() {
        let firstChildren = this.$children[0]
        return this.selected || firstChildren.name
      },
      updateSelected(index) {
        //index代表的是当前选中selected的索引
        this.lastSelectedIndex = this.nowSelectedIndex
        this.$emit('update:selected', this.getChildrenAllNames[index])
        // this.updateChildrenSelected()
      },
      updateChildrenSelected() {
        let selected = this.getSelected()
        this.$children.forEach(vm => {
          let reverse = this.nowSelectedIndex > this.lastSelectedIndex ? false : true
          if (this.timeId) {
            //如果正在自动轮播，才执行这里
            if (this.lastSelectedIndex === this.$children.length - 1 && this.nowSelectedIndex === 0) {
              reverse = false
            }
            if (this.lastSelectedIndex === 0 && this.nowSelectedIndex === this.$children.length - 1) {
              reverse = true
            }
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
        this.timeId = setTimeout(run, 3000)//用setTimeout模拟setInterval
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
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-slides {
    border: 1px solid greenyellow;
    position: relative;
    cursor: pointer;

    > .v-slides-window {
      overflow: hidden;

      > .v-slides-wrapper {
        position: relative;
      }
    }

    > .v-slides-dot {
      /*border: 1px solid red;*/
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