import VueRouter from 'vue-router'
import Vue from 'vue'
import MyGoodsList from '@/vivews/MyGoodsList'
import MyGoodsSearch from '@/vivews/MyGoodsSearch'
import MyUserInfo from '@/vivews/MyUserInfo'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/MyGoodsList'
  },
  {
    path: '/MyGoodsList',
    component: MyGoodsList
  },
  {
    path: '/MyGoodsSearch',
    component: MyGoodsSearch
  },
  {
    path: '/MyUserInfo',
    component: MyUserInfo
  }
]
const router = new VueRouter({ routes })
export default router
