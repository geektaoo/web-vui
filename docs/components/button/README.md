# Button按钮

基础用法

## 不同尺寸

提供四个尺寸的按钮，通过设定size属性来设定

<ClientOnly>
  <button-demo/>
</ClientOnly>

```vue
<v-button>按钮</v-button>
<v-button size="2x">按钮</v-button>
<v-button size="3x">按钮</v-button>
<v-button size="4x">按钮</v-button>
```

## 插入图标

通过icon属性设置icon

<ClientOnly>
  <button-icon-demo/>
</ClientOnly>

```vue
<v-button icon="loading">按钮</v-button>
<v-button icon="setting">按钮</v-button>
<v-button icon="success">按钮</v-button>
<v-button icon="info">按钮</v-button>
<v-button is-loading>按钮</v-button>
```

## 设置图标位置

通过设置position属性来设置icon的位置，可选值有right,left;默认为left

<ClientOnly>
  <button-position-demo/>
</ClientOnly>

```vue
<v-button icon="setting">按钮</v-button>
<v-button icon="setting" position="right">按钮</v-button>
```

## 禁用状态

设置disabled属性来禁用按钮

<ClientOnly>
  <button-disabled-demo/>
</ClientOnly>

```vue
<v-button disabled>按钮</v-button>
```

## ButtonGroup 按钮组合

多个按钮组合

<ClientOnly>
  <demo-button-group/>
</ClientOnly>

```vue
<v-button-group>
    <v-button>上一页</v-button>
    <v-button>主页</v-button>
    <v-button>下一页</v-button>
</v-button-group>
```

## Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
size|button尺寸类型|String|2x,3x,4x|*|
icon|图标名字|String|*|*|
isLoading|loading加载状态|Boolean|*|*|
position|图标位置|String|String|*|*|

## Events 事件
事件名称|说明|回调函数参数|
-|-|-|
onClick|当点击button时触发|*|