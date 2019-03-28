import Vue from 'vue'
import confirmComponent from './confirm'

const Confirm = {}

Confirm.install = function (Vue){

  Vue.prototype.$confirm = function(options){
    const ConfirmInstance = Vue.extend(confirmComponent)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new ConfirmInstance({
      propsData:options
    })
    vm.$mount(div)
    return vm.confirm()
  }
}

export default Confirm