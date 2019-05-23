
<template>
    <div id="app">
        <button @click="show = !show">点击</button>
        <transition name="sb">
          <h3 v-if="show">SB</h3>
        </transition>
      <transition name="bounce">
        <p v-if="show">菜鸟教程 -- 学的不仅是技术，更是梦想！！！</p>
      </transition>
      <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight">
      <p v-if="show">菜鸟教程 -- 学的不仅是技术，更是梦想！！！</p>
    </transition>
    </div>
</template>

<script>
    export default {
        name: "test8",
        data:function () {
          return{
            show:true
          }
        },
        methods:{

        }
    }
</script>

<style scoped>
  @import './../../assets/css/animate.css';
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .sb-enter-active {
    transition: all .3s ease;
  }
  .sb-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .sb-enter, .sb-leave-to
    /* .slide-fade-leave-active 用于 2.1.8 以下版本 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
