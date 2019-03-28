import Vue from 'vue'
import Toast from './toast'

const Constructor = Vue.extend(Toast)
let currentToast

function createToast(message, options) {
  let ToastInstance = new Constructor({
    propsData: options
  })
  ToastInstance.$slots.default = [message]
  ToastInstance.$mount()
  document.body.appendChild(ToastInstance.$el)
  return ToastInstance
}

export default {
  install(Vue) {
    Vue.prototype.$toast = function (message, options) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast(message, options)
    }
  }
}