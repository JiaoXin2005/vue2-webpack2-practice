import Vue from 'vue'
import VueRouter from 'vue-router'
const router = new VueRouter(require('./router.js'))
const app = require('./app.vue')
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: router,
  render: h => h(app)
})
