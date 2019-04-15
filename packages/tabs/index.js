import Tabs from './src/tabs'
import TabsNav from './src/tabs-nav'
import TabsItem from './src/tabs-item'
import TabsContent from './src/tabs-body'
import TabsPane from './src/tabs-pane'

Tabs.install = Vue => {
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabsNav.name, TabsNav)
  Vue.component(TabsItem.name, TabsItem)
  Vue.component(TabsContent.name, TabsContent)
  Vue.component(TabsPane.name, TabsPane)
}

export default Tabs