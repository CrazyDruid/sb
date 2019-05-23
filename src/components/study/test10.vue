<template id="sb">
    <div id="app">{{info}}
        <input type="text" value="info"/>
        <button class="sss">sb</button>
      <button>sb1</button>
    </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import https from '../../https'
  /*import axios from 'axios'*/
  Vue.use(VueResource)
    export default {
        name: "test10",
        data:function () {
          return{
            info:null
          }
        },
        methods:{

        },
        mounted () {
          /*this.axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response.data.time))*/
          https.fetchGet('https://api.coindesk.com/v1/bpi/currentprice.json',{})
            .then(response => (this.info = response.data.bpi))
          /*let parms = {'userId':'2c7392c8f76e44d09ea036bba661b4f0','type':'0','total':'0','count':'10'}
          https.fetchPost('/app/myselfOrderList',parms)*/
        }
    }
</script>

<style>
  input:disabled, input.disabled, input[disabled], input.disabled:hover, input[disabled]:hover, input.disabled:active, input[disabled]:active {
    border: 1px solid #DDD;
    box-shadow: none;
    background-color: #F5F5F5;
    color: #ACA899;
    cursor: default;
  }
  /*button{
    visibility: hidden;
  }*/
  button:not(.sss){
    background-color: #ff0000;
  }
</style>
