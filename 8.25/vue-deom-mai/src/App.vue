<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul v-for="(item,index) in arr" :key="index">
      <li>
        <button @click="btn(index)">{{item.name}}</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(item,index) in arr" :key="index">
        <th>{{index}}</th>
        <th>{{item.name}}</th>
        <th>{{item.price}}</th>
        <th>{{item.count}}</th>
        <th>{{item.price*item.count}}</th>
      </tr>
    </table>
    <p>总价格为:{{money}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
      price:0
    };
  },
  methods:{
    btn(ind){
    console.log(this.arr[ind]);
    this.arr[ind].count++
    return this.money = this.arr[ind].count*this.arr[ind].price
  }
  },
computed:{
  money:{
    set(val){
      console.log(val);
      // this.price = val
    },
    get(){
     return this.arr.reduce((acc,item) => acc += item.price*item.count,0)
    // return this.price
    }
  }
//   money:{
// return this.arr.reduce((acc,item) => acc += item.price*item.count,0)
// }
}
};
</script>