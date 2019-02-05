import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css' 

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    info: colors.blue.lighten2,
    accent: colors.green.lighten1,
    error: colors.red.darken2
  }
});
// Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')

