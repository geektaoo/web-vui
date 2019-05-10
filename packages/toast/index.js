import toastComponent from './src/toast'

let Toast = {}

Toast.install = function (Vue) {

  Vue.prototype.$toast = function (options) {
    if (document.getElementsByClassName('v-toast').length) {
      // 如果toast还在，则不再执行
      return
    }
    const Constructor = Vue.extend(toastComponent)
    const div = document.createElement('div')
    document.body.appendChild(div)
    let vm = new Constructor({
      propsData: options
    })
    vm.$mount(div)

    vm.isShow = true
    return vm
  }
}


export default Toast


