<template>
  <div id="app">
    <!--    <v-cascader :source="source" :selected.sync="selected"></v-cascader>-->
    <v-slides :selected.sync="selected">
      <v-slides-item name="1">
        <div class="box">1</div>
      </v-slides-item>
      <v-slides-item name="2">
        <div class="box">2</div>
      </v-slides-item>
      <v-slides-item name="3">
        <div class="box">3</div>
      </v-slides-item>
      <v-slides-item name="4">
        <div class="box">4</div>
      </v-slides-item>
    </v-slides>
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
                value: 'baoding',
                label: '保定市',
                children: [
                  {
                    value: 'jingxiu',
                    label: '竞秀区'
                  },
                  {
                    value: 'lianchi',
                    label: '莲池区'
                  },
                  {
                    value: 'mancheng',
                    label: '满城区'
                  },
                  {
                    value: 'qingyuan',
                    label: '清苑区'
                  },
                  {
                    value: 'xushui',
                    label: '徐水区'
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
            value: 'tianjin',
            label: '天津'
          }
        ],
        selected: undefined
      }
    },
    created() {
    }
  }
</script>

<style>
  @import "../style/var.scss";

  #app {
    margin-top: 30px;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .box {
    width: 400px;
    height: 150px;
    background: #dfe2e5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
  }
</style>
