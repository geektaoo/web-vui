## slides

## 基本用法

<ClientOnly>
  <slides/>
</ClientOnly>

```vue
<v-slides :selected.sync="selected" style="width: 400px;">
  <v-slides-item name="1">
    <div class="box">1</div>
  </v-slides-item>
  <v-slides-item name="2">
    <div class="box">2</div>
  </v-slides-item>
  <v-slides-item name="3">
    <div class="box">3</div>
  </v-slides-item>
  <v-slides-item name="4">
    <div class="box">4</div>
  </v-slides-item>
</v-slides>
```

## 自动播放

<ClientOnly>
  <slides-autoplay/>
</ClientOnly>

```vue
<v-slides :selected.sync="selected" style="width: 400px;" auto-play>
  <v-slides-item name="1">
    <div class="box">1</div>
  </v-slides-item>
  <v-slides-item name="2">
    <div class="box">2</div>
  </v-slides-item>
  <v-slides-item name="3">
    <div class="box">3</div>
  </v-slides-item>
  <v-slides-item name="4">
    <div class="box">4</div>
  </v-slides-item>
</v-slides>
```

## v-slides Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
selected|默认选中的值，必须，用.sync绑定|String|*|*|
autoPlay|自动播放|Boolean|*|*|

## v-slides-items Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
name|name,selected选中的值，必须|String|*|*|