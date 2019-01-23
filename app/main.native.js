import Vue from 'nativescript-vue'
import VueDevTools from 'nativescript-vue-devtools'
import VueRx from 'vue-rx'
import RadListView from 'nativescript-ui-listview/vue';


import LandingPage from './components/LandingPage/LandingPage'

import './styles'

Vue.use(RadListView);
Vue.use(VueDevTools)
Vue.use(VueRx)
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

new Vue({
  render: h => h('frame', [h(LandingPage)]),
}).$start()
