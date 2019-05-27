# toast 通知框

## 基本使用

<ClientOnly>
  <toast/>
</ClientOnly>

```vue
<v-button @click="onclick">点击弹出toast</v-button>
onclick(){
    this.$toast({
      content:'这是一段内容',
      showClose: true,
      onClose(){
        alert('我要关闭了')
      }
    })
}
```

## 自动关闭

<ClientOnly>
  <toast-deration/>
</ClientOnly>

```vue
<v-button @click="onclick">点击弹出toast</v-button>
onclick(){
    this.$toast({
      content:'这是一段内容',
      autoClose:true
    })
}
```

## 设置弹出的方向

设置position选项：right,bottom,middle,left,top。默认是top

<ClientOnly>
  <toast-position/>
</ClientOnly>

```vue
<v-button @click="onclick">点击弹出toast</v-button>
onclick(){
    this.$toast({
      content:'这是一段内容',
      showClose: true,
      position:'right',
      onClose(){
        alert('我要关闭了')
      }
    })
}
```

## Attributes 属性

参数|说明|类型|可选值|默认值|
-|-|-|-|-|
content|toast内容|String|*|空|
autoClose|自动关闭|Boolean|*|*|
duration|toast关闭的时间|Number|*|3000|
position|toast出现的位置|String|right,bottom.left,middle|top|
closeText|关闭按钮的名字|String|*|关闭|
showClose|是否出现关闭按钮|Boolean|*|fasle|
onClose|关闭按钮执行的函数|Function|*|*|