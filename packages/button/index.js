//导入组件，组内必须声明name
import Button from './src/button'

//为组件提供install安装方法
Button.install = Vue => Vue.component(Button.name, Button)

//默认导出组件
export default Button