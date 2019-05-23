import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import test1 from '@/components/study/test1'
import test2 from '@/components/study/test2'
import test3 from '@/components/study/test3'
import test4 from '@/components/study/test4'
import test5 from '@/components/study/test5'
import test6 from '@/components/study/test6'
import test7 from '@/components/study/test7'
import test8 from '@/components/study/test8'
import test9 from '@/components/study/test9'
import test10 from '@/components/study/test10'
import test11 from '@/components/study/test11'
import test12 from '@/components/study/test12'


Vue.use(Router)

export default new Router({
  // 去掉url#
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
      path: '/test4',
      name: 'test4',
      component: test4
    },
    {
      path: '/test5',
      name: 'test5',
      component: test5
    },
    {
      path: '/test6',
      name: 'test6',
      component: test6
    },
    {
      path: '/test7',
      name: 'test7',
      component: test7
    },
    {
      path: '/test8',
      name: 'test8',
      component: test8
    },
    {
      path: '/test9',
      name: 'test9',
      component: test9
    },
    {
      path: '/test10',
      name: 'test10',
      component: test10
    },
    {
      path: '/test11',
      name: 'test11',
      component: test11
    },
    {
      path: '/test12',
      name: 'test12',
      component: test12
    }
  ]
})
