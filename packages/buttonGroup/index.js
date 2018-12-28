//导入组件，组内必须声明name
import ButtonGroup from './src/button-group'

//为组件提供install安装方法
ButtonGroup.install = Vue => Vue.component(ButtonGroup.name, ButtonGroup)

//默认导出组件
export default ButtonGroup