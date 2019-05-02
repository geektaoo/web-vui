import Menu from './src/menu'
import MenuItem from './src/menu-item'
import SubMenu from './src/sub-menu'

Menu.install = Vue => {
  Vue.component(Menu.name,Menu)
  Vue.component(MenuItem.name,MenuItem)
  Vue.component(SubMenu.name,SubMenu)
}

export default Menu