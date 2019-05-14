<template>
  <div class="v-datePicker" @click.stop>
    <input type="text" class="input" :value="dateValue" @click="openPanel">
    <transition name="fadeDownBig">
      <div class="date-panel" v-show="panelState">
        <!--顶部按钮以及年月显示条-->
        <div class="topbar">
          <span class="icon" @click="onPre"><v-icon name="left"></v-icon></span>
          <div class="topbar-date">
            <span class="year">{{`${tmpYear}年`}}</span>
            <span class="month">{{changeTmpMonth}}</span>
          </div>
          <span class="icon" @click="onNext"><v-icon name="right"></v-icon></span>
        </div>
        <!-- 日期面板-->
        <div class="date-group">
          <table class="date-group-table">
            <thead>
            <tr>
              <th class="weekday" v-for="(item,index) in weekList" :key="index">{{item.label}}</th>
            </tr>
            </thead>
            <tbody class="date-list">
            <tr class="row">
              <td v-for="(item,index) in dateList.slice(0,7)"
                  v-text="item.value"
                  :key="index"
                  :class="{
                     preMonth:item.previousMonth,
                     nextMonth:item.nextMonth,
                     selected: date === item.value && month === tmpMonth && item.currentMonth,
                     invalid: validateDate(item)
                     }"
                  @click="selectDate(item)"
              >
              </td>
            </tr>
            <tr class="row">
              <td v-for="(item,index) in dateList.slice(7,14)"
                  v-text="item.value"
                  :key="index"
                  :class="{
                     preMonth:item.previousMonth,
                     nextMonth:item.nextMonth,
                     selected: date === item.value && month === tmpMonth && item.currentMonth,
                     invalid: validateDate(item)
                     }"
                  @click="selectDate(item)"
              >
              </td>
            </tr>
            <tr class="row">
              <td v-for="(item,index) in dateList.slice(14,21)"
                  v-text="item.value"
                  :key="index"
                  :class="{
                     preMonth:item.previousMonth,
                     nextMonth:item.nextMonth,
                     selected: date === item.value && month === tmpMonth && item.currentMonth,
                     invalid: validateDate(item)
                     }"
                  @click="selectDate(item)"
              >
              </td>
            </tr>
            <tr class="row">
              <td v-for="(item,index) in dateList.slice(21,28)"
                  v-text="item.value"
                  :key="index"
                  :class="{
                     preMonth:item.previousMonth,
                     nextMonth:item.nextMonth,
                     selected: date === item.value && month === tmpMonth && item.currentMonth,
                     invalid: validateDate(item)
                     }"
                  @click="selectDate(item)"
              >
              </td>
            </tr>
            <tr class="row">
              <td v-for="(item,index) in dateList.slice(28,35)"
                  v-text="item.value"
                  :key="index"
                  :class="{
                     preMonth:item.previousMonth,
                     nextMonth:item.nextMonth,
                     selected: date === item.value && month === tmpMonth && item.currentMonth,
                     invalid: validateDate(item)
                     }"
                  @click="selectDate(item)"
              >
              </td>
            </tr>
            <tr class="row">
              <td v-for="(item,index) in dateList.slice(35,42)"
                  v-text="item.value"
                  :key="index"
                  :class="{
                     preMonth:item.previousMonth,
                     nextMonth:item.nextMonth,
                     selected: date === item.value && month === tmpMonth && item.currentMonth,
                     invalid: validateDate(item)
                     }"
                  @click="selectDate(item)"
              >
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import vIcon from '../../icon/index'

  export default {
    name: 'vDatePicker',
    components: {vIcon},
    props: {
      value: {
        type: [Date, String],
        default: ''
      },
      format: {
        type: String,
        default: 'yyyy-MM-dd'
      }
    },
    data() {
      return {
        dateValue: '',//输入框显示日期
        date: new Date().getDate(),//当前日期
        panelState: false,//初始值。默认panel关闭
        tmpMonth: new Date().getMonth(), // 临时月份，可修改
        month: new Date().getMonth(),
        tmpYear: new Date().getFullYear(), // 临时年份，可修改
        weekList: [
          {label: '日', value: 0},
          {label: '一', value: 1},
          {label: '二', value: 2},
          {label: '三', value: 3},
          {label: '四', value: 4},
          {label: '五', value: 5},
          {label: '六', value: 6}
        ], // 周
        monthList: [
          {label: '1月', value: 0},
          {label: '2月', value: 1},
          {label: '3月', value: 2},
          {label: '4月', value: 3},
          {label: '5月', value: 4},
          {label: '6月', value: 5},
          {label: '7月', value: 6},
          {label: '8月', value: 7},
          {label: '9月', value: 8},
          {label: '10月', value: 9},
          {label: '11月', value: 10},
          {label: '12月', value: 11}
        ], // 月
        nowValue: 0// 当前选中日期值
      }
    },
    mounted() {
      if (this.value) {
        this.dateValue = this.formatDate(new Date(this.value).getTime())
      }
      window.addEventListener('click', this.documentListener)
    },
    computed: {
      dateList() {
        //获取当月的天数
        let currentMonthLength = new Date(this.tmpYear, this.tmpMonth + 1, 0).getDate()
        let dateList = Array.from({length: currentMonthLength}, (val, index) => {
            return {
              currentMonth: true,
              value: index + 1
            }
          }
        )
        //获取当月1号的星期是为了确定1号前需要插多少天
        let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay()
        //确认上个月一共多少天
        let previousMonthLength = new Date(
          this.tmpYear,
          this.tmpMonth,
          0
        ).getDate()
        // 在1号前插入上个月日期
        for (let i = 0, len = startDay; i < len; i++) {
          dateList = [
            {previousMonth: true, value: previousMonthLength - i}
          ].concat(dateList)
        }
        // 补全剩余位置,至少14天，则 i < 15
        for (let i = 1, item = 1; i < 15; i++, item++) {
          dateList[dateList.length] = {nextMonth: true, value: i}
        }
        // console.log(dateList, 'dateList')
        return dateList
      },
      changeTmpMonth() {
        return this.monthList[this.tmpMonth].label
      }
    },
    methods: {
      openPanel() {
        this.panelState = !this.panelState
      },
      selectDate(item) {
        // 赋值 当前 nowValue,用于控制样式突出显示当前月份日期
        this.nowValue = item.value
        // 选择了上个月
        if (item.previousMonth) {
          this.tmpMonth--
          if (this.tmpMonth < 0) {
            this.tmpMonth = 11
            this.tmpYear = this.tmpYear - 1
          }
        }
        // 选择了下个月
        if (item.nextMonth) {
          this.tmpMonth++
          if (this.tmpMonth > 11) {
            this.tmpMonth = 0
            this.tmpYear = this.tmpYear + 1
          }
        }
        // 获取选中日期的 date
        let selectDay = new Date(this.tmpYear, this.tmpMonth, this.nowValue)
        // 格式日期为字符串后，赋值给 input
        this.dateValue = this.formatDate(selectDay.getTime())
        // 关闭面板
        this.panelState = !this.panelState
        this.$emit('input', selectDay)
      },
      // 日期格式方法
      formatDate(date, fmt = this.format) {
        if (date === null || date === 'null') {
          return '--'
        }
        date = new Date(Number(date))
        var o = {
          'M+': date.getMonth() + 1, // 月份
          'd+': date.getDate(), // 日
          'h+': date.getHours(), // 小时
          'm+': date.getMinutes(), // 分
          's+': date.getSeconds(), // 秒
          'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
          S: date.getMilliseconds() // 毫秒
        }
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
          )
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length === 1
                ? o[k]
                : ('00' + o[k]).substr(('' + o[k]).length)
            )
        }
        return fmt
      },
      // 确认是否为当前月份
      validateDate(item) {
        if (this.nowValue === item.value && item.currentMonth) {
          return true
        }
      },
      onPre() {
        this.tmpMonth--
        if (this.tmpMonth < 0) {
          this.tmpMonth = 11
          this.tmpYear = this.tmpYear - 1
        }
      },
      onNext() {
        this.tmpMonth++
        if (this.tmpMonth > 11) {
          this.tmpMonth = 0
          this.tmpYear = this.tmpYear + 1
        }
      },
      documentListener() {
        this.panelState = false
      }
    },
    destroyed() {
      window.removeEventListener('click', this.documentListener)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/var";

  .v-datePicker {
    user-select: none;
    width: 280px;
    text-align: center;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    position: relative;

    > .input {
      display: inline-flex;
      box-sizing: border-box;
      width: 100%;
      height: $height;
      padding: 16px;
      font-size: 12px;
      border: 1px solid #dcdee2;
      border-radius: 4px;
      color: #515a6e;
      background-color: #fff;
      background-image: none;
      position: relative;
      cursor: text;
      transition: border 0.2s ease-in-out, background 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
      margin-bottom: 6px;
    }

    > .date-panel {
      width: 280px;
      box-shadow: 0 0 8px #ccc;
      background: #fff;
      position: absolute;
      left: 0;
      top: 100%;
      z-index: 10;

      > .topbar {
        display: flex;
        justify-content: center;
        align-items: center;

        > .icon {
          padding: 8px;
          color: #515a6e;
          cursor: pointer;

          &:hover {
            fill: #1dd1a1;
          }
        }

        > .topbar-date {
          padding: 8px !important;
          margin: 0 24px;

          > .year, .month {
            margin: 0 4px;
          }

          &:hover {
            color: #1dd1a1;
          }
        }
      }

      > .date-group {
        padding: 0 8px 8px;

        > .date-group-table {
          width: 100%;
          border-collapse: collapse;
          margin: 0;
          display: table;

          > thead {
            > tr {
              > .weekday {
                font-size: 16px;
                padding: 8px;
                color: #c5c8ce;
                text-align: center;
              }
            }
          }

          > .weekday {
            display: inline-block;
            font-size: 16px;
            padding: 0 8px !important;
            color: #c5c8ce;
            text-align: center;
          }

          > .date-list {
            list-style: none;
            text-align: left;
            overflow: hidden;
            margin-top: 4px;

            > .row {

              > td {
                padding: 8px;
                text-align: center;
                border: 1px solid #f0f0f0;
                cursor: pointer;
                color: #000;
                border-radius: 4px;

                &.selected {
                  background: #dff9fb;
                  color: #1dd1a1;
                }

                &.invalid {
                  color: #EA2027;
                  background: #dff9fb;
                }

                &.preMonth, &.nextMonth {
                  color: #c5c8ce;
                }

                &:hover {
                  color: #55efc4;
                }
              }
            }
          }
        }
      }
    }
  }

  .fadeDownBig-enter-active,
  .fadeDownBig-leave-active,
  .fadeInDownBig {
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }

  .fadeDownBig-enter-active {
    animation-name: fadeInDownBig;
  }

  .fadeDownBig-leave-active {
    animation-name: fadeOutDownBig;
  }

  @keyframes fadeInDownBig {
    from {
      opacity: 0.8;
      -webkit-transform: translate3d(0, -4px, 0);
      transform: translate3d(0, -4px, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeOutDownBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>