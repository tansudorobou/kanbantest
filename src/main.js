import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueKanban from 'vue-kanban'

Vue.use(vueKanban)

Vue.config.productionTip = false

import "./assets/kanban.scss"

// import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
