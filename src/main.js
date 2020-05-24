import Vue from 'vue'
// Plugins
import '@/plugins/bootstrapVue'
import '@/plugins/fontAwesome'
import './directives/index'
// Vue extensions
import router from './router'
import store from './store'
// Styles
import '@/assets/css/main.styl'
// Components
import App from './App.vue' // Main component
import BaseLoading from '@/components/BaseLoading'

// Configuration
Vue.config.productionTip = false

Vue.component('BaseLoading', BaseLoading)

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
