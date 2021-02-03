import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import './assets/sass/style.scss'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(firestorePlugin)

Vue.use(VueAnalytics, {
  id: 'UA-178666086-1',
  router
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
