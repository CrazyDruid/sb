<!--练习-->
<template>
  <div id="app">
    <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
    <h1>site : {{site.split('').reverse().join('')}}</h1>
    <h1 v-html="url"></h1>
    <h1 v-bind:class="{'blackAndWhite':use}">{{details()}}</h1>
    <h2>{{ok ? 'YES':'NO'}}</h2>
    <div v-bind:id="'list' + id">{{id}}</div>
    <p v-if="seen">sb</p>
    <p>{{alexa + 20}}</p>
    <pre><a v-bind:href="theUrl" v-bind:target="target">SSR</a></pre>
    <a v-on:click="doSomeThing">111</a>
    <p>{{message | getOne}}</p>
    <input v-model="message">
    <button v-on:click="re">反转</button>
    <div>{{one | getOne | getTwo}}</div>
    <div v-if="Math.random() > 0.5">Sorry</div>
    <div v-else>YOU ARE SB</div>
    <div>{{randomnum}}</div>
    <input type="text" v-model="inputs" placeholder="请输入">
    <h3 v-if="getl(inputs) > 10">输入的字符长度大于10</h3>
    <h3 v-else-if="getl(inputs) > 5">输入的字符长度大于5</h3>
    <h3 v-else-if="getl(inputs) > 0">输入了字符</h3>
    <h3 v-else>没有输入字符</h3>
  </div>
</template>
<!--<script type="text/javascript" src="js/vue.is"></script>-->
<script type="text/javascript">
  export default {
    name:"test1",
    data: function(){
      return{
        site: "菜鸟教程",
        url: "www.runoob.com",
        alexa: 10000,
        use:false,
        ok:true,
        id:1,
        seen:true,
        theUrl:"hello",
        message:'',
        one:'one',
        target:'_blank',
        randomnum:Math.random(),
        inputs:''
      }
    },
    methods: {
      details: function() {
        return  this.site + " - 学的不仅是技术，更是梦想！";
      },
      doSomeThing:function () {
        alert(111);
      },
      re:function () {
        this.message = this.message.split('').reverse().join('')
      },
      getl:function (value) {
        if(!value) return 0
        return value.split('').length
      }
    },
    //过滤器
    filters:{
      getOne:function (value) {
        if(!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
      getTwo:function (value) {
        return value + 'is sb';
      }
    }
  }
</script>

<style scoped>
  /*黑色背景白色字体*/
  .blackAndWhite{
    background: #444;
    color: #eee;
  }
</style>


