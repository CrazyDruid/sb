<template>
  <div id="app">
    <input v-focus>
    <div v-sb="{color:'green',text:'哈哈'}">super sb</div>
    <h2>hello</h2>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view name="names"></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Router from 'vue-router'

  Vue.use(Router)
  //获取焦点
  Vue.directive('focus', {
    inserted: function (el) {
      el.focus()
    }
  })
  Vue.directive('sb', {
    bind: function (el, binding) {
      el.innerHTML = binding.value.text
      el.style.backgroundColor = binding.value.color
    }
  })
  const Foo = {template: '<div>foo</div>'}
  const Bar = {template: '<div>bar</div>'}

  // 2. 定义路由
  // 每个路由应该映射一个组件。 其中"component" 可以是
  // 通过 Vue.extend() 创建的组件构造器，
  // 或者，只是一个组件配置对象。
  // 我们晚点再讨论嵌套路由。
  const routes = [
    {path: '/foo', components: {default: Foo, names: Foo}, meta: {keepAlive: false}},
    {path: '/bar', components: {default: Bar, names: Bar}, meta: {keepAlive: false}}
  ]

  // 3. 创建 router 实例，然后传 `routes` 配置
  const router = new Router({
    routes
  })

  export default {
    name: "test7",
    router,
    data: function () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>
