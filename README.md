### web-vui

#### 这是一个基于vue的UI组件库，仅仅供于学习，请不要用于生产环境

#### 安装

```
npm install web-vui -S
```

#### 使用方法
```
import Vue from 'vue'
import Vui from 'web-vui'
import 'web-vui/lib/web-vui.css'

Vue.use(Vui)

new Vue({
  render: h => h(App),
}).$mount('#app')
```