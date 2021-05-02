import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import i18n from "./i18n"
Vue.use(i18n)

Vue.config.productionTip = false

Vue.mixin({
  computed: {
      $i18n() {
          return this.$store.state.i18n.getTrans()
      }
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
