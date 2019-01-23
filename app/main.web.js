import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRx from 'vue-rx'
import LandingPage from './components/LandingPage/LandingPage'

import './styles'

Vue.use(VueRx)
Vue.use(VueMaterial)
new Vue({
  el: '#app',
  render: h => h(LandingPage),
})