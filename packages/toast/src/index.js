import Toast from './toast'
export default {
  install(Vue) {
    Vue.prototype.$toast = function(message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData:{
          showClose: {
            text:'关闭',
            callback(){
              console.log('用户说他知道了')
            }
          }
        }
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
