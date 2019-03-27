import Toast from './toast'
export default {
  install(Vue) {
    Vue.prototype.$toast = function(message,options) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData:options
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
