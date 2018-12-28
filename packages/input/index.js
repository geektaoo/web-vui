//导入组件，组内必须声明name
import Input from './src/input'

//为组件提供install安装方法
Input.install = Vue => Vue.component(Input.name, Input)

//默认导出组件
export default Input