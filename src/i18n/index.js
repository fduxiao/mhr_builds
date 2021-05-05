export default {
    install: function(Vue) {
        Vue.mixin({
            computed: {
                $i18n() {
                    return this.$store.state.i18n.getTrans()
                },
                $lang() {
                    return this.$i18n.$lang
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
