# popover 气泡卡片

## 基本用法

<ClientOnly>
  <popover/>
</ClientOnly>

```vue
<v-popover>
  <v-button>上方弹出</v-button>
  <template slot="content">
    这是一段内容
  </template>
</v-popover>

<v-popover position="bottom">
  <v-button>下方弹出</v-button>
  <template slot="content">
    这是一段内容
  </template>
</v-popover>

<v-popover position="left">
  <v-button>左边弹出</v-button>
  <template slot="content">
    这是一段内容
  </template>
</v-popover>

<v-popover position="right">
  <v-button>右边弹出</v-button>
  <template slot="content">
    这是一段内容
  </template>
</v-popover>
```

## hover触发

<ClientOnly>
  <popover-hover/>
</ClientOnly>

```vue
<v-popover trigger="hover">
  <v-button>上方弹出</v-button>
  <template slot="content">
    这是一段内容
  </template>
</v-popover>

<v-popover position="bottom" trigger="hover">
  <v-button>下方弹出</v-button>
  <template slot="content">
    这是一段内容
  </template>
</v-popover>

<v-popover position="left" trigger="hover">
  <v-button>左边弹出</v-button>
  <template slot="content">
    这是一段内容
  </template>
</v-popover>

<v-popover position="right" trigger="hover">
  <v-button>右边弹出</v-button>
  <template slot="content">
    这是一段内容
  </template>
</v-popover>
```

## Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
position|popover的位置|String|top,right,bottom,left|top|
trigger|触发方式|String|hover|click|