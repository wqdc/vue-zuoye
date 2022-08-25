<template>
<div>
    <div @click="btn">
    <input type="checkbox" v-model="checked" value="科幻" />科幻
    <input type="checkbox" v-model="checked" value="喜剧" />喜剧
    <input type="checkbox" v-model="checked" value="动漫" />动漫
    <input type="checkbox" v-model="checked" value="冒险" />冒险
    <input type="checkbox" v-model="checked" value="科技" />科技
    <input type="checkbox" v-model="checked" value="军事" />军事
    <input type="checkbox" v-model="checked" value="娱乐" />娱乐
    <input type="checkbox" v-model="checked" value="奇闻" />奇闻
  </div>
  <ul v-for="(item,index) in checked" :key="index">
    <li>{{item}}</li>
  </ul>
</div>
</template>

<script>
// arr:["科幻", "喜剧", "动漫", "冒险", "科技", "军事", "娱乐", "奇闻"]
export default {
  data() {
    return {
      arr:[],
      value:'',
      checked:[]
    };
  },
  methods: {
    btn(){
    this.arr =  this.checked.filter(item => item===true)
    }
  },
};
</script>

<style>
</style>
