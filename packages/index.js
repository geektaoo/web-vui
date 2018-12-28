import Button from './button/index'
import ButtonGroup from './buttonGroup/index'
import Icon from './icon/index'
import Input from './input/index'

const components = [
  Button,
  ButtonGroup,
  Icon,
  Input
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
  Button,
  ButtonGroup,
  Icon,
  Input
}