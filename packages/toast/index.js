
//导入组件，组内必须声明name
import Toast from './src/toast'

//为组件提供install安装方法
Toast.install = Vue => Vue.component(Toast.name, Toast)

//默认导出组件
export default Toast


