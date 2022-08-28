<template>
  <div>
    <h1>商品清单如下：</h1>
    <tbody>
      <tr v-for="(item, index) in arr" :key="index + '1' ">
        <td>{{ item.shopName }}{{ item.price }}/份</td>
      </tr>
      <tr>
        <span>请选择购买的数量：</span>
      </tr>
      <Sum
        v-for="(item, index) in arr"
        :key="index"
        :list="item"
        :ind="index"
        @add="addFn"
        @subs='sub'
      ></Sum>
      <p>总价：{{ number }}</p>
    </tbody>
  </div>
</template>

<script>
import Sum from '@/components/sum.vue'
export default {
  data() {
    return {
      arr: [
        {
          shopName: "可比克薯片",
          price: 5.5,
          count: 0,
        },
        {
          shopName: "草莓酱",
          price: 3.5,
          count: 0,
        },
        {
          shopName: "红烧肉",
          price: 55,
          count: 0,
        },
        {
          shopName: "方便面",
          price: 12,
          count: 0,
        },
      ],
    };
  },
methods:{
  addFn(ind){
    this.arr[ind].count++
  },
    sub(ind){
    this.arr[ind].count--
  }
},
  components:{
    Sum
  },
  computed:{
    number(){
      return this.arr.reduce((acc,item) => acc += item.price*item.count,0)
    }
  },
 
};
</script>

<style>
</style>