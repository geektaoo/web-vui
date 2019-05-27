# tabs 标签页

## 基础用法

<ClientOnly>
  <tabs/>
</ClientOnly>

```vue
<v-tabs :selected.sync="selectedName" style="">
  <v-tabs-nav>
    <v-tabs-item name="society">社会</v-tabs-item>
    <v-tabs-item name="science" disabled>科技</v-tabs-item>
    <v-tabs-item name="finance">财经</v-tabs-item>
    <v-tabs-item name="sport">运动</v-tabs-item>
    <v-tabs-item name="gakki">美女</v-tabs-item>
    <v-tabs-item name="liuyifei">经济</v-tabs-item>
  </v-tabs-nav>
  <v-tabs-body>
    <v-tabs-pane name="society">这是社会的新闻</v-tabs-pane>
    <v-tabs-pane name="science">这是科技的新闻</v-tabs-pane>
    <v-tabs-pane name="finance">这是财经的新闻</v-tabs-pane>
    <v-tabs-pane name="sport">这是运动的新闻</v-tabs-pane>
    <v-tabs-pane name="gakki">
      <img src="../../../examples/assets/gakki.jpg" alt="">
    </v-tabs-pane>
    <v-tabs-pane name="liuyifei">
      <img src="../../../examples/assets/liuyifei.jpg" alt="">
    </v-tabs-pane>
  </v-tabs-body>
</v-tabs>
```

## v-tabs Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
selected|选中的元素，必须|String|*|*|

## v-tabs-item Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
name|该item的唯一标记，必须|String|*|*|
disabled|禁用|Boolean|*|false|

## v-tabs-pane Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
name|该pane的唯一标记，必须和name的值一样，也是必须的|String|*|*|
