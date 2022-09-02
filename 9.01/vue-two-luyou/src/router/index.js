import VueRouter from 'vue-router'
import Vue from 'vue'

import PagePage from '@/views/PagePage'
import PageNews from '@/views/PageNews'
import SportPage from '@/views/SportPage'

import SportSpage from '@/views/SportViews/SportSpage'
import DomesticSports from '@/views/SportViews/DomesticSports'
import ForeignSports from '@/views/SportViews/ForeignSports'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    riderect: '/page'
  },
  {
    path: '/page',
    component: PagePage
  },
  {
    path: '/news',
    component: PageNews
  },
  {
    path: '/sports',
    component: SportPage,
    children: [
      {
        path: '',
        riderect: 'sports/sport'
      },
      {
        path: 'sport',
        component: SportSpage
      },
      {
        path: 'DomesticSports',
        component: DomesticSports
      },
      {
        path: 'ForeignSports',
        component: ForeignSports
      }
    ]
  }
]
const router = new VueRouter({ routes })
export default router
