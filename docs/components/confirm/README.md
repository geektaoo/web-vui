# confirm确认框

confirm组件是以插件的形式引入的，它会在Vue.prototype中添加全局方法$confirm，你可以在Vue的实例中直接使用它。

## 基础用法

<ClientOnly>
  <confirm-demo />
</ClientOnly>

```javascript
<v-button @click="onClick">点击</v-button>

methods: {
  onClick() {
    this.$confirm({
      title: '通知',
      content: '刘亦菲回来了，你要不要去见她？',
      confirmText: '好的，我知道了',
      cancleText: '我不想见她'
    }).then(() => {
      console.log('我知道他点击了确定按钮了')
    })
      .catch(() => {
        console.log('我知道他点击了取消按钮')
      })
  }
}
```
## confirm Atrributes

参数|说明|类型|默认值|可选值|
-|-|-|-|-|
confirmType|confirm的类型|String|confirm|alert|
title|标题|String|提示|*|
content|正文的内容|String|*|*|
confirmText|确定按钮的文字|String|确定|*|
cancleText|取消按钮的文字|String|取消|*|
