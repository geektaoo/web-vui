<template>
  <div id="app">
    <v-cascader :source="source" :selected="selected"
                @update:selected="selected = $event"></v-cascader>
    <p>11111111111111</p>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        source: [
          {
            value: 'hebei',
            label: '河北',
            children: [
              {
                value: 'shijiazhuang',
                label: '石家庄',
                children: [
                  {
                    value: 'changan',
                    label: '长安区'
                  },
                  {
                    value: 'xinhua',
                    label: '新华区'
                  },
                  {
                    value: 'yuhua',
                    label: '裕华区'
                  }
                ]
              },
              {
                value: 'tangshan',
                label: '唐山',
                children: [
                  {
                    value: 'lunan',
                    label: '路南区'
                  },
                  {
                    value: 'lubei',
                    label: '路北区'
                  },
                  {
                    value: 'kaiping',
                    label: '开平区'
                  },
                  {
                    value: 'guye',
                    label: '古冶区'
                  },
                ]
              },
              {
                value:'baoding',
                label:'保定市',
                children:[
                  {
                    value:'jingxiu',
                    label:'竞秀区'
                  },
                  {
                    value:'lianchi',
                    label:'莲池区'
                  },
                  {
                    value:'mancheng',
                    label:'满城区'
                  },
                  {
                    value:'qingyuan',
                    label:'清苑区'
                  },
                  {
                    value:'xushui',
                    label:'徐水区'
                  },
                ]
              }
            ]
          },
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
          {
            value:'tianjin',
            label:'天津'
          }
        ],
        selected:[]
      }
    },
    methods: {
      onClick() {
        this.$confirm({
          confirmType: 'alert',
          title: '通知',
          content: '刘亦菲回归影坛，加盟王力宏自导自演的电影《恋爱通告》',
          confirmText: '知道了',
          cancleText: '不想知道'
        }).then(() => {
          console.log('点击了知道了')
        })
          .catch(() => {
            console.log('点击了不知道')
          })
      }
    }
  }
</script>

<style>
  @import "../packages/var.scss";

  #app {
    margin-top: 30px;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
  }

  .red {
    background: indianred;
  }

  .button {
    margin: 10px 20px;
  }
</style>
