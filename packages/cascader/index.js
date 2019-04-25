import Cascader from './src/cascader'
import CascaderItem from './src/cascader-item'

Cascader.install = Vue =>{
  Vue.component(Cascader.name,Cascader)
  Vue.component(CascaderItem.name,CascaderItem)
}

export default Cascader