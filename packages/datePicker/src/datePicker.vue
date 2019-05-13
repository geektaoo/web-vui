<template>
  <div class="v-datePicker">
    <input type="text" class="input" :value="dateValue" @click="openPanel">
    <transition name="fadeDownBig">
      <div class="date-panel" v-show="panelState">
        <!--顶部按钮以及年月显示条-->
        <div class="topbar">
          <span @click="onPre"><v-icon name="left"></v-icon></span>
          <span class="year">{{tmpYear}}</span>
          <span class="month">{{changeTmpMonth}}</span>
          <span @click="onNext"><v-icon name="right"></v-icon></span>
        </div>
        <!-- 日期面板-->
        <div class="date-group" v-show="panelType === 'date'">
          <span class="weekday" v-for="(item,index) in weekList" :key="index">{{item.label}}</span>
          <ul class="date-list">
            <li v-for="(item,index) in dateList"
                v-text="item.value"
                :key="index"
                :class="{
                preMonth:item.previousMonth,
                nextMonth:item.nextMonth,
                selected: date === item.value && month === tmpMonth && item.currentMonth, invalid: validateDate(item)
                }"
                @click="selectDate(item)"
            >
            </li>
          </ul>
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
        nowValue: 0, // 当前选中日期值
        panelType: 'date' // 面板状态
      }
    },
    mounted() {
      // console.log(this.dateValue, 'date')
      if (this.value) {
        // console.log(this.value, 'value')
        this.dateValue = this.formatDate(new Date(this.value).getTime())
      }
    },
    computed: {
      dateList() {
        //获取当月的天数
        let currentMonthLength = new Date(this.tmpYear, this.tmpMonth + 1, 0).getDate()
        // console.log(currentMonthLength, 'current对象')
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
        let previousMongthLength = new Date(
          this.tmpYear,
          this.tmpMonth,
          0
        ).getDate()
        // 在1号前插入上个月日期
        for (let i = 0, len = startDay; i < len; i++) {
          dateList = [
            {previousMonth: true, value: previousMongthLength - i}
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
      },
      // 通过改变this.tmpYear则可以改变年份数组
      yearList() {
        return Array.from({length: 12}, (value, index) => this.tmpYear + index)
      }
    },
    methods: {
      openPanel() {
        this.panelState = !this.panelState
        this.panelType = 'date'
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
        if (this.nowValue === item.value && item.currentMonth) return true
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .topbar {
    padding-top: 8px;
  }

  .topbar span {
    display: inline-block;
    width: 20px;
    height: 30px;
    line-height: 30px;
    color: #515a6e;
    cursor: pointer;
  }

  .topbar span:hover {
    color: #2d8cf0;
  }

  .topbar .year,
  .topbar .month {
    width: 60px;
  }

  .year-list {
    height: 200px;
    width: 210px;
  }

  .year-list .selected {
    background: #2d8cf0;
    border-radius: 4px;
    color: #fff;
  }

  .year-list li {
    display: inline-block;
    width: 70px;
    height: 50px;
    line-height: 50px;
    border-radius: 10px;
    cursor: pointer;
  }

  .year-list span {
    display: inline-block;
    line-height: 16px;
    padding: 8px;
  }

  .year-list span:hover {
    background: #e1f0fe;
  }

  .weekday {
    display: inline-block;
    font-size: 13px;
    width: 30px;
    color: #c5c8ce;
    text-align: center;
  }

  .v-datePicker {
    width: 210px;
    text-align: center;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  }

  .date-panel {
    width: 210px;
    box-shadow: 0 0 8px #ccc;
    background: #fff;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .date-list {
    width: 210px;
    text-align: left;
    height: 180px;
    overflow: hidden;
    margin-top: 4px;
  }

  .date-list li {
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    color: #000;
    border: 1px solid #fff;
    border-radius: 4px;
  }

  .date-list .selected {
    border: 1px solid #2d8cf0;
  }

  .date-list .invalid {
    background: #2d8cf0;
    color: #fff;
  }

  .date-list .preMonth,
  .date-list .nextMonth {
    color: #c5c8ce;
  }

  .date-list li:hover {
    background: #e1f0fe;
  }

  .input {
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
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

  .fadeDownBig-enter-active,
  .fadeDownBig-leave-active,
  .fadeInDownBig {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .fadeDownBig-enter-active {
    -webkit-animation-name: fadeInDownBig;
    animation-name: fadeInDownBig;
  }

  .fadeDownBig-leave-active {
    -webkit-animation-name: fadeOutDownBig;
    animation-name: fadeOutDownBig;
  }

  @-webkit-keyframes fadeInDownBig {
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

  @-webkit-keyframes fadeOutDownBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.8;
      -webkit-transform: translate3d(0, -4px, 0);
      transform: translate3d(0, -4px, 0);
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