<template>
  <div id="once">
    <my-header title="购物车案例" color="#000" background="skyblue"></my-header>
    <my-goods :good='item' v-for="item in goods" :key="item.goods_id"></my-goods>
    <my-footer :goods='goods'></my-footer>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = "https://applet-base-api-t.itheima.net"

import MyHeader from "cpns/MyHeader.vue";
import MyGoods from "cpns/MyGoods.vue";
import MyFooter from "cpns/MyFooter.vue";

import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  data() {
    return {
      goods: []
    }
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  methods: {
    async getGoods() {
      const {data} = await axios({url: "api/cart" })
      this.goods = data.list
      console.log(this.goods);
    }
  },
  created() {
    this.getGoods()
  }
};
</script>

<style scoped>
#once{
  padding: 45px 0 50px;
}
</style>
