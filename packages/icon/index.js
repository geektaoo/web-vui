//导入组件，组内必须声明name
import Icon from './src/icon'

//为组件提供install安装方法
Icon.install = Vue => Vue.component(Icon.name, Icon)

//默认导出组件
export default Icon