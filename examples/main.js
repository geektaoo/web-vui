import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Button from '../packages/button/src/button'
import Icon from '../packages/icon/src/icon'
import ButtonGroup from '../packages/buttonGroup/src/button-group'
import Input from '../packages/input/src/input'
import Col from '../packages/grid/src/col'
import Row from '../packages/grid/src/row'

Vue.component('v-button', Button)
Vue.component('v-icon', Icon)
Vue.component('v-button-group', ButtonGroup)
Vue.component('v-input', Input)
Vue.component('v-col', Col)
Vue.component('v-row', Row)
new Vue({
  render: h => h(App),
}).$mount('#app')
