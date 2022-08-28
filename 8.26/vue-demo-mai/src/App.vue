<template>

<div>
  <tbody>
   <Tr  v-for="(item,index) in goodsArr" :key="index" :arr="item" @num="fn"></Tr>
   <tr>总计：{{ sum }}</tr>
  </tbody>
</div>
</template>

<script>
import Tr from "@/components/tr.vue";
export default {
  data() {
    return {
      goodsArr: [
        {
          count: 0,
          goodsName: "Watermelon",
        },
        {
          count: 0,
          goodsName: "Banana",
        },
        {
          count: 0,
          goodsName: "Orange",
        },
        {
          count: 0,
          goodsName: "Pineapple",
        },
        {
          count: 0,
          goodsName: "Strawberry",
        },
      ],
    };
  },
  computed: {
    sum(){
      return this.goodsArr.reduce((acc,item) => acc += item.count,0)
    }
  },
  components: {
    Tr,
  },
};
</script>

<style>
</style>
