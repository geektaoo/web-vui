# 开始使用

```javascript
import Vue from 'vue'
import Vui from 'web-vui'
import 'web-vui/lib/web-vui.css'

Vue.use(Vui)

new Vue({
  render: h => h(App),
}).$mount('#app')
```