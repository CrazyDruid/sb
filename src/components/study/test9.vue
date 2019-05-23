<template>
    <div id="app">111</div>
</template>

<script>
    import Vue from 'vue'
    var myMixin = {
      created: function () {
        this.startmixin()
      },
      methods: {
        startmixin: function () {
          document.write("欢迎来到混入实例");
        }
      }
    };
    var Component = Vue.extend({
      mixins: [myMixin]
    })
    //var component = new Component();
    export default {
        name: "test9",
        data:function () {
          return{
            my:'hello'
          }
        },
        methods:{

        },
        mixins:[myMixin],
        created:function() {
          document.write("sb")
        },
    }
    const thenew = {
      methods:{
        getsb:function () {
          alert("sb")
        }
      }
    }

    //thenew.methods.getsb()

  Vue.mixin({
    created:function() {
      var myOption = this.$options.my
      if (myOption) {
        document.write(myOption)
      }
    }
  })

</script>

<style scoped>

</style>
