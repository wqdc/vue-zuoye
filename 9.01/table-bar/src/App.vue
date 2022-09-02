<template>
<div>
    <div>
  <my-header color="#000" title="TarBal" background="skyblue"></my-header>

    <router-view></router-view>
    <!-- <router-link :to="{ path: '/' + comName, component:comName }"></router-link> -->
    <!-- <my-footer :list="tabList" @setName="getName"></my-footer> -->
    <my-footer :list="tabList" @setName="comName = $event"></my-footer>
    <!-- <div>
      <div>
      <router-link to="/MyGoodsList"></router-link>
      <router-link to="/MyGoodsSearch"></router-link>
      <router-link to="/MyUserInfo"></router-link>
    </div>
       <router-view></router-view>
    </div> -->
  </div>
</div>
</template>

<script>
import MyHeader from 'cpns/MyHeader.vue'
import MyFooter from 'cpns/MyFooter.vue'

import MyGoodsList from '@/vivews/MyGoodsList.vue'
import MyGoodsSearch from '@/vivews/MyGoodsSearch.vue'
import MyUserInfo from '@/vivews/MyUserInfo.vue'
export default {
  components: {
    MyHeader,
    MyFooter,
    MyUserInfo,
    MyGoodsSearch,
    MyGoodsList
  },
  data () {
    return {
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList'
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch'
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo'
        }
      ],
      comName: 'MyGoodsList'
    }
  },
  methods: {
    // getName(date) {
    //   // console.log(date);
    //   this.comName = date
    // }
  }
}
</script>

<style>
body {
  padding: 45px 0 50px;
}
</style>
