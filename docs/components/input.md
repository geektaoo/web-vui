# input 输入框

使用方法
<ClientOnly>
   <demo-input></demo-input>
</ClientOnly>

```vue
//绑定一个value值
<v-input  value="张三"></v-input>
//设置placeholder
<v-input placeholder="请输入你的名字"></v-input>
//设置disabled
<v-input :disabled="true"></v-input>
//设置error状态
<v-input error="姓名不能少于三个字" value="张三"></v-input>
//设置success状态
<v-input :success="true" value="张三"></v-input>
//设置v-model
<v-input v-model="msg" placeholder="支持v-model"></v-input>
```