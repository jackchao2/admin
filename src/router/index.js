import Vue from 'vue'
import Router from 'vue-router'
// import Main from './views/Main.vue'
import routes from './router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})
