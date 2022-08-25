<template>
  <div>
    <h3>欢迎光临_vue开发的收银系统_水果店</h3>
    <table>
      <tr>
        苹果￥10/斤，折扣 《 8折 》
      </tr>
      <tr>
        请输入你要购买的斤数：<input type="text" v-model="val"/>
      </tr>
      <tr>
        <button @click="btn">结账买单</button>
      </tr>
      <tr>
        结账单：总价 {{ price }} 元，折后价{{price*0.8}}元，省了：{{price-(price*0.8)}}元
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val:'',
      price:0
    }
  },
  methods:{
    btn(){
      // console.log(this.val);
      this.price = this.val*10
      // console.log(this.price);
    }
  }
};
</script>

<style>
div{
  width: 500px;
  height: 400px;
  margin: 0 auto;
}
tr{
  margin-top: 20px;
  text-align: center;
}
</style>