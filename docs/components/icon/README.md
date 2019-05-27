# icon 图标

提供一些常用的icon集合

## 不同类型的图标

定义name的属性可以显示不同的类型的图标

<ClientOnly>
  <icon/>
</ClientOnly>

```vue
<v-icon name="loading"></v-icon>
<v-icon name="error"></v-icon>
<v-icon name="info"></v-icon>
<v-icon name="setting"></v-icon>
<v-icon name="good"></v-icon>
```

## 可以调整大小

size属性接受一些不同的尺寸，如size-2x,size-3x,size-4x

<ClientOnly>
  <icon-size/>
</ClientOnly>

```vue
<v-icon name="loading" size="size-2x"></v-icon>
<v-icon name="loading" size="size-3x"></v-icon>
<v-icon name="loading" size="size-4x"></v-icon>
```

## 可以自定义图标样式

<ClientOnly>
  <icon-class/>
</ClientOnly>

```vue
<v-icon class="red" name="loading" size="size-3x"></v-icon>
<v-icon class="green" name="scussce" size="size-3x"></v-icon>
<v-icon class="yellow" name="good" size="size-3x"></v-icon>
```

## Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
name|图标类型|String|*|*|
size|图标大小|String|size-2x,size-3x,size-4x|*|  
