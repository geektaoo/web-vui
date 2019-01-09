# grid 网格系统

> 网格系统是按照一定的规则把页面分成固定的相同宽度，然后排列出各种组合的可能性，以便于页面快速布局。我们使用了24格的网格系统，也就是将页面区域分成24等分。

使用方法

<ClientOnly>
   <demo-grid></demo-grid>
</ClientOnly>

```vue
三栏均等布局
<v-row>
  <v-col class="col">8</v-col>
  <v-col class="col">8</v-col>
  <v-col class="col">8</v-col>
</v-row>
不均等布局
<v-row>
  <v-col span="10" class="col">10</v-col>
  <v-col span="14" class="col">14</v-col>
</v-row>
使用offset设置margin-left大小
<v-row>
  <v-col span="10" class="col">10</v-col>
  <v-col span="8" offset="6" class="col">8</v-col>
</v-row>
使用gutter设置间隙
<v-row gutter="30">
  <v-col span="5" class="col">5</v-col>
  <v-col span="5" class="col">5</v-col>
  <v-col span="6" class="col">6</v-col>
  <v-col span="8" class="col">8</v-col>
</v-row>
```
##  v-row Attribute

|  参数  |       说明       |     类型      | 可选值 | 默认值 |
| :----: | :--------------: | :-----------: | :----: | :----: |
| gutter | 网格系统中的间隙 | number,String |   *    |   *    |



## v-col Attribute

|  参数  |      说明      |      类型      | 可选值 | 默认值 |
| :----: | :------------: | :------------: | :----: | :----: |
|  span  | 网格占据的列数 | String,number  |   *    |   *    |
| offset | 网格左侧的列数 | String，number |   *    |   *    |

