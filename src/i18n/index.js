export default {
    install: function(Vue) {
        Vue.mixin({
            computed: {
                $i18n() {
                    return this.$store.state.i18n.getTrans()
                }
            },
            methods: {
                $setLang(lang) {
                    this.$store.commit('setI18NLang', lang)
                }
            },
        })
    }
}
