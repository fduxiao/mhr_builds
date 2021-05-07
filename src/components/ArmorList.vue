<template>
    <el-table :data="armors" border height="100%" style="width: 100%;">
        <el-table-column prop="name" :label="$i18n.name"></el-table-column>
        <el-table-column prop="rankText" :label="$i18n.rank"></el-table-column>
        <el-table-column prop="head" :label="$i18n.head">
            <template slot-scope="scope">
                <ShowArmor :armor="scope.row.head"></ShowArmor>
            </template>
        </el-table-column>
        <el-table-column prop="chest" :label="$i18n.chest"></el-table-column>
        <el-table-column prop="arms" :label="$i18n.arms"></el-table-column>
        <el-table-column prop="waist" :label="$i18n.waist"></el-table-column>
        <el-table-column prop="legs" :label="$i18n.legs"></el-table-column>
    </el-table>
</template>
<script>

import ShowArmor from "./ShowArmor"

export default {
    components: {
        ShowArmor
    },
    data() {
        return {
            materialsPopover: {}
        }
    },
    methods: {
        f(val, key) {
            this.materialsPopover[key] = val
            console.log(val, key, this.materialsPopover)
        }
    },
    computed: {
        armors() {
            let result = []
            for(let id in this.$MH.armors) {
                // deep copy an object
                var armor = this.$MH.armors[id].setLang(this.$lang)
                armor.id = id
                armor.rankText = this.$getRank(armor.rank)
                result.push(armor)
            }
            return result
        }
    },
}
</script>
