import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Button from '../packages/index'

Vue.use(Button)
new Vue({
  render: h => h(App),
}).$mount('#app')
