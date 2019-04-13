import Tabs from './src/tabs.vue'
import TabsNav from './src/tabs-nav.vue'
import TabsItem from './src/tabs-item.vue'
import TabsContent from './src/tabs-content.vue'
import TabsPane from './src/tabs-pane.vue'

Tabs.install = Vue => { 
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabsNav.name, TabsNav)
  Vue.component(TabsItem.name, TabsItem)
  Vue.component(TabsContent.name, TabsContent)
  Vue.component(TabsPane.name,TabsPane)
}

export default Tabs