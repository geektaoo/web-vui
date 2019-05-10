## menu 菜单

## 基本使用

<ClientOnly>
<menu-demo />
</ClientOnly>

```vue
<v-menu :selected.sync="selected">
  <v-menu-item name="首页">首页</v-menu-item>
  <v-sub-menu name="关于">
    <template slot="title">关于</template>
    <v-menu-item name="团队">团队介绍</v-menu-item>
    <v-menu-item name="学校">学校介绍</v-menu-item>
    <v-sub-menu name="家庭联系">
      <template slot="title">家庭联系</template>
      <v-menu-item name="QQ">QQ联系</v-menu-item>
      <v-menu-item name="wechat">微信联系</v-menu-item>
      <v-sub-menu name="电话方式">
        <template slot="title">电话方式</template>
        <v-menu-item name="移动">移动</v-menu-item>
        <v-menu-item name="联通">联通</v-menu-item>
        <v-menu-item name="电信">电信</v-menu-item>
      </v-sub-menu>
    </v-sub-menu>
  </v-sub-menu>
  <v-menu-item name="前端">前端</v-menu-item>
</v-menu>
```

## 竖直方向

<ClientOnly>
<menu-vertical />
</ClientOnly>

```vue
<v-menu :selected.sync="selected" vertical>
  <v-menu-item name="首页">首页</v-menu-item>
  <v-sub-menu name="关于">
    <template slot="title">关于</template>
    <v-menu-item name="团队">团队介绍</v-menu-item>
    <v-menu-item name="学校">学校介绍</v-menu-item>
    <v-sub-menu name="家庭联系">
      <template slot="title">家庭联系</template>
      <v-menu-item name="QQ">QQ联系</v-menu-item>
      <v-menu-item name="wechat">微信联系</v-menu-item>
      <v-sub-menu name="电话方式">
        <template slot="title">电话方式</template>
        <v-menu-item name="移动">移动</v-menu-item>
        <v-menu-item name="联通">联通</v-menu-item>
        <v-menu-item name="电信">电信</v-menu-item>
      </v-sub-menu>
    </v-sub-menu>
  </v-sub-menu>
  <v-menu-item name="前端">前端</v-menu-item>
</v-menu>
```

## v-menu Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
selected|默认选中值，必须，需要.sync配合使用|String|*|*|
vertical|menu的竖直方向|Boolean|*|*|

## v-sub-menu Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
name|name唯一标识,必须|String|*|*|

## v-menu-item Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
name|name唯一标识,必须|String|*|*|