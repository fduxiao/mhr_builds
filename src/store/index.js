import Vue from 'vue'
import Vuex from 'vuex'
import I18N from  '../i18n/i18n'

import MH from '../MH'

Vue.use(Vuex)
Vue.use(MH)

export default new Vuex.Store({
    state: {
        i18n: new I18N(),
        MH: MH
    },
    mutations: {
        setI18NLang(state, lang) {
            state.i18n.setLang(lang)
        },
    },
    actions: {
    },
    modules: {
    }
})
