import VueRouter from 'vue-router'
import Vue from 'vue'
import UIRouter from '@/views/UI_Router'
import ConTacts from '@/views/ConTacts'
import About from '@/views/AboutTree'
import AllContacts from '@/views/TwoViews/AllContacts'
import AliceName from '@/views/TwoViews/AliceName'
import BobName from '@/views/TwoViews/BobName'
import BobBlag from '@/views/TwoViews/Bob/BobBlag'
import BobFiex from '@/views/TwoViews/Bob/BobFiex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/UIRouter'
  },
  {
    path: '/UIRouter',
    component: UIRouter
  },
  {
    path: '/Contacts',
    component: ConTacts,
    redirect: '/Contacts',
    children: [
      {
        path: '',
        redirect: 'AllContacts'
      },
      {
        path: 'AllContacts',
        component: AllContacts
      },
      {
        path: 'Alice',
        component: AliceName
      },
      {
        path: 'Bob',
        component: BobName,
        redirect: 'Bob',
        children: [
          {
            path: '',
            redirect: 'BobBlag'
          },
          {
            path: 'BobBlag',
            name: 'BobBlag',
            component: BobBlag
          },
          {
            path: 'BobFiex',
            name: 'BobFiex',
            component: BobFiex
          }
        ]
      }
    ]
  },
  {
    path: '/About',
    component: About
  }
]
const router = new VueRouter({ routes })
export default router
