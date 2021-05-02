import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import i18n from "./i18n"
Vue.use(i18n)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

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
