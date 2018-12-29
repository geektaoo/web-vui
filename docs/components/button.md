# button 按钮

使用方法

<ClientOnly>
   <demo-button></demo-button>
</ClientOnly>

  ```vue
      //开启loading
      <v-button :isLoading="true">按钮</v-button>
      //添加icon,icon名在icon中
      <v-button iconName="setting">按钮</v-button>
      //icon在右边，默认位置在左边
      <v-button iconName="setting" iconPosition="right">按钮</v-button>
      //disabled状态
      <v-button disabled>按钮</v-button>
  ```