<template>
    <div id="app">
      <run></run>
      <gos></gos>
      <te :message="hello"></te>
      <ol>
        <todo-item v-for="item in sites" v-bind:todo="item" :key="item.text"></todo-item>
      </ol>
      <div>++++++++++</div>
      <sb></sb><sb></sb><sb></sb>
      <br>
      <thenewsb v-on:newdemo="add"></thenewsb>
      <thenewsb v-on:newdemo="add"></thenewsb>
      <thenewsb v-on:newdemo="add"></thenewsb>
      <h3>{{total}}</h3>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('run',{
      template:'<h1>自定义组件!</h1>'
    })
    var gos = {
      template: '<h1>局部组件!</h1>'
    }
    Vue.component('te',{
      props:['message'],
      template:'<span>{{message}}</span>'
    })
    Vue.component('todo-item', {
      props: ['todo'],
      template: '<li>{{ todo.text }}</li>'
    })
    var sbData = {
        count:0
    }
    Vue.component('sb', {
        data:function () {
            return sbData
        },
        template:'<button @click="count++">{{count}}</button>'
    })
    Vue.component('thenewsb', {
        template: '<button v-on:click="enet">{{ counter }}</button>',
        data:function () {
          return{
            counter:0
          }
        },
        methods:{
          enet:function () {
              this.counter++;
              this.$emit('newdemo')
          }
        }
    })
    export default {
        name: "test6",
        data:function () {
          return{
            hello:'newhello',
            sites: [
              { text: 'Runoob' },
              { text: 'Google' },
              { text: 'Taobao' }
            ],
            total:0,
            index:1
          }
        },
        methods:{
          sss:function () {
            alert("sss")
          },
          add:function () {
            this.total += 1;
          }
        },
      components:{
        'gos':gos
      }
    }
</script>

<style scoped>

</style>
