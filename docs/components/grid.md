# grid 网格系统
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