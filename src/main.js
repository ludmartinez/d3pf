// Libraries
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faVuejs,
  faBootstrap,
  faBattleNet,
  faFontAwesome
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Extensions
import router from './router'
import store from './store'
// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/main.styl'
// Components
import App from './App.vue' // Main component
import BaseLoading from '@/components/BaseLoading'

// Configuration
Vue.config.productionTip = false

library.add(
  faGithub,
  faVuejs,
  faBootstrap,
  faBattleNet,
  faFontAwesome,
  faUserSecret
)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('BaseLoading', BaseLoading)
Vue.component('font-awesome-icon', FontAwesomeIcon)

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
