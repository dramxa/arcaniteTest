import Vue from 'vue'
import App from './App.vue'
import store from './store/vuex-store'
import vuetify from './plugins/vuetify';
import VueAwesomeSwiper from 'vue-awesome-swiper'


import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)

// регистрируем компоненты
import registerComponents   from './components/_registerComponents'
registerComponents();

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
