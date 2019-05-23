<template>
    <div id="app">
      <div v-bind:class="{active : isActive,'text-a' : isTrue}"></div>
      <div v-bind:class="obj"></div>
      <div v-bind:class="obj2"></div>
      <div v-bind:class="[a1,b1]"></div>
      <div v-bind:class="[a1,isF ? b1 : '']"></div>
      <div>+++++++++++++++++++++++++++++++++++++++++</div>
      <div v-bind:style="{'background-color' : color1}">sbsbsb</div>
      <div v-bind:style="[styleObj,styleObj2]">sb1sb1sb1</div>
      <div>+++++++++++++++++++++++++++++++++++++++++</div>
      <div v-bind:style="{color : 'red',fontSize : fontSize + 'px'}">asda</div>
      <div v-bind:style="newobj">dasdas</div>
      {{fontSize}}
      <button @click="fontSize++">+</button>
      <button @click="fontSize--">-</button>

    </div>
</template>

<script>
    export default {
      name: "test4",
      data:function () {
        return{
          isActive:true,
          isTrue:true,
          obj:{
            active:true,
            'text-a':true
          },
          a1:'active',
          b1:'text-a',
          isF:false,
          color1:'pink',
          styleObj:{
            'background-color' : 'black',
            'color':'white'
          },
          styleObj2:{
            'width':'100px',
            'height':'100px',
            'margin':'0 auto'
          },
          fontSize:20,
          newobj:{
            'color' : 'green',
            'font-size' : this.fontSize + 'px'
          }
        }
      },
      computed:{
        obj2:function () {
          return{
            active:true,
            'text-a':true
          }
        }
      }
    }
</script>

<style scoped>
  .active{
    background-color: #0094ff;
    width: 100px;
    height: 100px;
    margin:0 auto;
  }
  .text-a{
    background-color: red;
  }
</style>
