import Icon from './icon/index'
import Button from './button/index'
import ButtonGroup from './buttonGroup/index'
import Input from './input/index'
import Grid from './grid/index'

const components = [
  Icon,
  Button,
  ButtonGroup,
  Input,
  Grid
]

const install = function(Vue) {

  if(install.installed) return

  components.map(component => Vue.component(component.name,component))
}

if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Icon,
  Button,
  ButtonGroup,
  Input,
  Grid
}