import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myIcon from './components/common/my-icon'
import Tip from './components/common/tip'
import VueParticles from 'vue-particles'
import vueAplayer from 'vue-aplayer'




Vue.config.productionTip = false

Vue.component('my-icon',myIcon)
Vue.component('tip',Tip)
Vue.use(VueParticles)
Vue.use(vueAplayer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
