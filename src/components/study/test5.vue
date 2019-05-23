<template>
    <div id="app">
        <div @click="greet">GREET</div>
      <div @click="greet2('sb')">GREET2</div>
      <input type="text" @keyup.delete="deletes">
      <input type="text" @keyup.ctrl.67="fz"><br>
      <input type="checkbox" id="checkbox" v-model="checked" @change="getall">
      <label for="checkbox">{{ checked }}</label>
      <p>多个复选框：</p>
      <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
      <label for="runoob">Runoob</label>
      <input type="checkbox" id="google" value="Google" v-model="checkedNames">
      <label for="google">Google</label>
      <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
      <label for="taobao">taobao</label>
      <br>
      <span>选择的值为:{{checkedNames}}</span>
      <br>
      <input type="radio" id="a" value="a" v-model="news">
      <label for="runoob">a</label>
      <input type="radio" id="b" value="b" v-model="news">
      <label for="google">b</label>
      <span>选择的值为:{{news}}</span>
      <br>
    </div>
</template>

<script>
    export default {
        name: "test5",
        data:function () {
          return{
            checked:false,
            checkedNames:[],
            newcheckedNames:['Runoob','Google','Taobao'],
            news:'a'
          }
        },
        methods:{
          greet:function (event) {
            alert(event.target.tagName)
          },
          greet2:function (message) {
            alert(message)
          },
          deletes:function () {
            alert("delete")
          },
          fz:function () {
            alert("复制")
          },
          getall:function () {
            if(this.checked){
                this.checkedNames = this.newcheckedNames
            }else{
              this.checkedNames = []
            }
          }
        },
        watch:{
          'checkedNames':function () {
            if(this.checkedNames.length == this.newcheckedNames.length){
                this.checked = true
            }else{
                this.checked = false
            }
          }
        }
    }
</script>

<style scoped>

</style>
