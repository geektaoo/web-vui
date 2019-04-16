import Collapse from './src/collapse'
import CollapseItem from './src/collapse-item'

Collapse.install = Vue => {
  Vue.component(Collapse.name,Collapse)
  Vue.component(CollapseItem.name,CollapseItem)
}

export default Collapse