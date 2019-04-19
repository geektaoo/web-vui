import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Button from '../packages/button/index'
import Icon from '../packages/icon/index'
import ButtonGroup from '../packages/buttonGroup/src/button-group'
import Input from '../packages/input/src/input'
import Col from '../packages/grid/src/col'
import Row from '../packages/grid/src/row'
import Toast from '../packages/toast/src/toast'
import ToastIndex from '../packages/toast/src/index'
import Comfirm from '../packages/confirm/src/confirm'
import ComfirmIndex from '../packages/confirm/src/index'
import Tabs from '../packages/tabs/index'
import Popover from '../packages/popover/index'
import Collapse from '../packages/collapse/index'
import Cascader from '../packages/cascader/index'

Vue.component('v-button-group', ButtonGroup)
Vue.component('v-input', Input)
Vue.component('v-col', Col)
Vue.component('v-row', Row)
Vue.component('v-toast', Toast)
Vue.component('v-comfirm', Comfirm)

Vue.use(ToastIndex,Button)
Vue.use(ComfirmIndex)
Vue.use(Tabs)
Vue.use(Popover)
Vue.use(Collapse)
Vue.use(Cascader)
Vue.use(Icon)

new Vue({
  render: h => h(App)
}).$mount('#app')
