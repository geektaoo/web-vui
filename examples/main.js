import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Button from '../packages/button/src/button'
import Icon from '../packages/icon/src/icon'
import ButtonGroup from '../packages/buttonGroup/src/button-group'

Vue.component('v-button',Button)
Vue.component('v-icon',Icon)
Vue.component('v-button-group',ButtonGroup)
new Vue({
  render: h => h(App),
}).$mount('#app')
