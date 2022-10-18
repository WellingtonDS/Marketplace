import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadingPaginate from '@/components/loadPage/LoadPage.vue'

Vue.config.productionTip = false
Vue.component('LoadingPaginate', LoadingPaginate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
