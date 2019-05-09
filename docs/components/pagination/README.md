# pagination 分页器

当数据过多时，使用翻页器来进行数据的展示。

## 基础用法

<ClientOnly>
  <pagination/>
</ClientOnly>

```vue
<v-pagination :current-page.sync="currentPage" :total-page="7"></v-pagination>
```

## 带有省略项

当页码大于7时

<ClientOnly>
  <pagination-dot/>
</ClientOnly>

```vue
<v-pagination :current-page.sync="currentPage" :total-page="20"></v-pagination>
```

## Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
current-page|.sync绑定的值,表示当前选定的值|Number|*|*|
total-page|页码总数|Number|*|*|

