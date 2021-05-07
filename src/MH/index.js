import materials from './materials'
import armors from './armors'
import monsters from './monsters'
import skills from './skills'
import weapons from './weapons.json'

export default {
    ...materials,
    ...armors,
    ...monsters,
    ...skills,
    weapons,
    install: function(Vue) {
        Vue.mixin({
            computed: {
                $MH() {
                    return this.$store.state.MH
                }
            },
            methods: {
                $getRank(r) {
                    switch(r) {
                        case 'low':
                            return this.$i18n.lowRank
                        case 'high':
                            return this.$i18n.highRank
                    }
                },
                $getMonster(key) {
                    return this.$MH.monsters[key]
                }
            }
        })
    }
}
