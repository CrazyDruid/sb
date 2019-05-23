<template>
    <div id="app">
        <ol>
          <li v-for="site in sites">
              {{site.name}}
          </li>
        </ol>
        <ul v-for="(value,key,index) in object">
          <li v-if="key == 'name'">{{value}}</li>
          <li v-else>{{index}}|{{key}} : {{value}}</li>
        </ul>
        <div v-for="n in 9">
          <b v-for="m in n">
            {{m}} * {{n}} = {{m*n}}
          </b>
        </div>
      <p>{{message}}</p>
      <p>{{revermessage}}</p>
      <div id="super">
        <p>{{counter}}</p>
        <button @click="counter++" style="font-size: 25px;">点我</button>
      </div>
      <div id = "computed_props">
        千米 : <input type = "text" v-model = "kilometers">
        米 : <input type = "text" v-model = "meters">
      </div>
    </div>
</template>


<script>
  var newmessage = "";
    export default {
        name: "test2",
        data:function () {
          return{
            sites:[
              {name:'tom'},
              {name:'john'},
              {name:'mary'}
            ],
            object:{
              name:"tom",
              level:50,
              date:new Date()
            },
            message:'good god',
            counter:0,
            kilometers : 0,
            meters:0
          }
        },
        methods:{

        },
        computed:{
          revermessage:{
            get:function () {
              return this.message.split('').reverse().join('')
            },
            set:function () {
              newmessage = 'the super cheng';
            }
          }
        },
      watch : {
        kilometers:function(val) {
          this.kilometers = val;
          this.meters = this.kilometers * 1000
        },
        meters : function (val) {
          this.kilometers = val/ 1000;
          this.meters = val;
        }
      }
    }
</script>

<style scoped>

</style>
