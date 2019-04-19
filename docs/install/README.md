# 安装

## 从github上下载

```bash
git clone git@github.com:Tommywt/web-vui.git
```

## 使用npm安装

```bash
npm i web-ui -S
```

## 使用方法

在入口文件main.js中引入

```javascript
import Vue from 'vue'
import Vui from 'web-vui'
import 'web-vui/lib/web-vui.css'

Vue.use(Vui)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

接下来你就可以使用全部组件了

