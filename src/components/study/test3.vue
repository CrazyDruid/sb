<template>
    <div id="app">
      <table>
        <tr>
          <th v-for="tit in title">{{tit}}</th>
        </tr>
        <tr v-for="value in shop">
          <td>{{value.count}}</td>
          <td>{{value.name}}</td>
          <td>{{value.price}}</td>
          <td><button @click="value.buysize++">+</button>
            {{value.buysize}}
            <button v-bind:disabled="value.buysize==0" @click="value.buysize--">-</button></td>
          <td><button @click="value.buysize = 0">移除</button></td>
        </tr>
      </table>
      <h3>总价: {{calculation()}}</h3>
      <router-link to="/hello">
        <button class="btn btn-default">提交</button>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "test3",
        data:function () {
          return{
              title:['序号','商品名称','价格','购买数量','操作'],
              shop:[
                {count:1,name:'苹果',price:10,buysize:0},
                {count:2,name:'橘子',price:12,buysize:0},
                {count:3,name:'香蕉',price:8,buysize:0}
              ]
          }
        },
        methods:{
          calculation:function () {
            var size = this.shop.length;
            var newprice = 0;
            for(var i = 0;i < size;i++){
              var food = this.shop[i];
              var price = food.price * food.buysize;
              newprice += price;
            }
            return newprice;
          }
        },
        watch:{

        }
    }
</script>

<style scoped>
  table{
    margin:0 auto;text-align:center;
  }
  table,table tr th,table tr td{
    border:1px solid #0094ff;
  }
</style>
