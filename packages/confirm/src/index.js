import Vue from 'vue'
import Confirm from './confirm'

const Constructor = Vue.extend(Confirm)

function createConfirm(options) {
  const div = document.createElement('div')
  document.body.appendChild(div)
  let ConfirmInstance = new Constructor({
    propsData:options
  })
  ConfirmInstance.$mount(div)
  return ConfirmInstance
}
export default {
  install(Vue){
    Vue.prototype.$confirm = function(options){
      createConfirm(options)
    }
  }
}