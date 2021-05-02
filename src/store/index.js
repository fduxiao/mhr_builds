import Vue from 'vue'
import Vuex from 'vuex'
import I18N from  '../i18n/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    i18n: new I18N(),
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
