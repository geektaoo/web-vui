import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Button from '../packages/button/index'
import Icon from '../packages/icon/index'
import ButtonGroup from '../packages/buttonGroup/index'
import Input from '../packages/input/src/input'
import Col from '../packages/grid/src/col'
import Row from '../packages/grid/src/row'
import Toast from '../packages/toast/index'
import Comfirm from '../packages/confirm/index'
import Tabs from '../packages/tabs/index'
import Popover from '../packages/popover/index'
import Collapse from '../packages/collapse/index'
import Cascader from '../packages/cascader/index'
import Slides from '../packages/slides/index'
import Menu from '../packages/menu/index'
import Pagination from '../packages/pagination/index'
import DatePicker from '../packages/datePicker/index'

Vue.component('v-col', Col)
Vue.component('v-row', Row)

Vue.use(Button)
Vue.use(Icon)
Vue.use(ButtonGroup)
Vue.use(Input)
Vue.use(Toast)
Vue.use(Comfirm)
Vue.use(Tabs)
Vue.use(Popover)
Vue.use(Collapse)
Vue.use(Cascader)
Vue.use(Slides)
Vue.use(Menu)
Vue.use(Pagination)
Vue.use(DatePicker)

new Vue({
  render: h => h(App)
}).$mount('#app')
