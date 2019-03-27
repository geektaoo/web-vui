import Vue from 'vue'
import Toast from './toast'

const ToastConstructor = Vue.extend(Toast)
let currentToast

/**
 *
 * @param message
 * @param options
 * @returns {CombinedVueInstance<any & Vue, object, object, object, Record<never, any>>}
 */
function createToast(message, options) {
  let ToastInstance = new ToastConstructor({
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
