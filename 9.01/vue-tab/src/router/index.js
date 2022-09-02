import VueRouter from 'vue-router'
import Vue from 'vue'
import Page from '@/views/PageSerch'
import Order from '@/views/OrderPage'
import Sort from '@/views/SortPage'
import My from '@/views/MyPage'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/page'
  },
  {
    path: '/page',
    component: Page
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/my',
    component: My
  }
]
const router = new VueRouter({
  routes
})

export default router
