# input 输入框

## 基本用法

<ClientOnly>
  <input-demo/>
</ClientOnly>

```vue
<v-input v-model="value" placeholder="请输入内容"></v-input>

<script>
  export default {
    data(){
      return{
        value:''
      }
    }
  }
</script>
```

## 禁用状态

<ClientOnly>
  <input-disabled/>
</ClientOnly>

```vue
<v-input v-model="value" placeholder="请输入内容" disabled></v-input>
```

## 密码框

<ClientOnly>
  <input-type/>
</ClientOnly>

```vue
<v-input type="password" placeholder="请输入密码"></v-input>
```

## 成功的状态

<ClientOnly>
  <input-success/>
</ClientOnly>

```vue
<v-input v-model="value" placeholder="请输入姓名" success></v-input>
```

## 错误的状态

<ClientOnly>
  <input-error/>
</ClientOnly>

## Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
value/v-model|绑定value值|String|*|*|
type|input的type类型|String|password|text|
placeholder|input的placeholder|String|*|*|
disabled|input禁用|Boolean|*|false|
error|错误提示|String|*|*|
success|成功提示|Boolean|*|*|

## Events 事件

事件名称|说明|回调函数|
-|-|-|
input|input输入时的内容时触发|(event: Event)|
change|在 Input 值改变时触发|(event: Event)|
onClear|在点击清除按钮上触发|*|