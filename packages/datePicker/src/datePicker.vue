<template>
  <div class="v-datePicker">
    <input type="text" class="input">
    <transition name="fadeDownBig">
      <div class="date-panel">
        <!--顶部按钮以及年月显示条-->
        <div class="topbar">
          <span><v-icon name="left"></v-icon></span>
          <span class="year">2019</span>
          <span class="month">3</span>
          <span><v-icon name="right"></v-icon></span>
        </div>
        <!-- 日期面板-->
        <div class="date-group">
          <span class="weekday"></span>
          <ul class="date-list">
            <li></li>
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
    data() {
      return {
        dateValue: ''//输入框显示日期
      }
    },
    methods: {
      openPanel() {
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