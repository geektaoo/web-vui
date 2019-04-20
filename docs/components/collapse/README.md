# collapse 折叠面板

将内容区域折叠/展开

## 基本用法

默认可以同时打开多个面板,设置selected属性可以打开默认的面板

<ClientOnly>
  <collapse-demo/>
</ClientOnly>

```vue
<v-collapse :selected="selectedArray">
  <v-collapse-item title="刘亦菲" name="title1">
    刘亦菲（1987年8月25日－），曾用名安风、刘茜美子，美籍华人，中国大陆女演员
  </v-collapse-item>
  <v-collapse-item title="关晓彤" name="title2">
    关晓彤（1997年9月17日－），中国大陆女演员，出生于北京，满族人
  </v-collapse-item>
  <v-collapse-item title="李沁" name="title3">
    李沁（1990年9月27日－），江苏昆山人，中国女演员
  </v-collapse-item>
</v-collapse>
</div>
```

## 手风琴效果

通过设置属性single，可以开启手风琴效果。只能打开一个

<ClientOnly>
  <collapse-single-demo/>
</ClientOnly>

```vue
<v-collapse single>
  <v-collapse-item title="刘亦菲" name="title1">
    刘亦菲（1987年8月25日－），曾用名安风、刘茜美子，美籍华人
  </v-collapse-item>
  <v-collapse-item title="关晓彤" name="title2">
    关晓彤（1997年9月17日－），中国大陆女演员，出生于北京，满族人
  </v-collapse-item>
  <v-collapse-item title="李沁" name="title3">
    李沁（1990年9月27日－），江苏昆山人，中国女演员
</v-collapse>
```
## v-collapse Attributes

参数|说明|类型|默认值|可选值|
-|-|-|-|-|
selected|默认选中得值|Array|*|*|
single|只能单选打开|Boolean|false|*|

## v-collapse-item Attributes

参数|说明|类型|默认值|可选值|
-|-|-|-|-|
title|标题,必须填写|String|*|*|
name|必选而且是唯一，是selected选中的依据|String,Number|*|*|
