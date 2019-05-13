import DatePicker from './src/datePicker'

DatePicker.install = Vue =>{
  Vue.component(DatePicker.name,DatePicker)
}

export default DatePicker