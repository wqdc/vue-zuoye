import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@/assets/fonts/iconfont.css'
import router from '@/router/index'
Vue.config.productionTip = false
Vue.directive('foucse', {
  inserted (el) {
    el.focus()
  }
})
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
