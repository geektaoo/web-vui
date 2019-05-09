# cascader级联选择器

从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。

## 基础用法

<ClientOnly>
  <cascader/>
</ClientOnly>

```vue
<v-cascader :source="source" :selected.sync="selected"></v-cascader>
//source的数据格式
{
    value: 'shanghai',
    label: '上海',
    children: [
      {
        value: 'baoshan',
        label: '宝山'
      },
      {
        value: 'jiading',
        label: '嘉定',
        children: [
          {
            value: 'haigan',
            label: '海港区'
          },
          {
            value: 'shanghaiguan',
            label: '山海关区'
          },
          {
            value: 'beidaihe',
            label: '北戴河区'
          }
        ]
      }
    ]
},
```


## Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
source|数据源|Array|*|*|
selected|当前选中数据的集合,需要用.sync绑定使用|Array|*|*|