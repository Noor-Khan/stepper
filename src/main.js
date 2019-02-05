import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App'
import store from './store'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { routes } from './routes/routePages'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    info: colors.blue.lighten2,
    accent: colors.green.lighten1,
    error: colors.red.darken2
  }
});


// export const eventBus = new Vue()

// const router =  new VueRouter({
// 	routes,
// 	mode: 'history'
// })

// Vue.use(Vuetify)
// Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(BootstrapVue)
// const routes = [
// 	{path: "/",component: home},
// 	{path: "/users/:teamId",component: users}
// ]

// const router = new VueRouter({
// 	routes,
// 	mode: 'history',
// });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el:'#app',
	// router,
	store,
	render: h => h(App),
	components: { App }
})