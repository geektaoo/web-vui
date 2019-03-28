//导入组件，组内必须声明name
import Confirm from './src/confirm'

//为组件提供install安装方法
Confirm.install = Vue => Vue.component(Confirm.name, Confirm)

//默认导出组件
export default Confirm