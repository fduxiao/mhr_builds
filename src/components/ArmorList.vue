<template>
    <el-table :data="armors" border height="100%" style="width: 100%;">
        <el-table-column prop="name" :label="$i18n.name"></el-table-column>
        <el-table-column prop="rankText" :label="$i18n.rank"></el-table-column>
        <el-table-column prop="head" :label="$i18n.head">
            <template slot-scope="scope">
                <el-row>
                    <el-popover trigger="hover" placement="left">
                        <p>{{ scope.row.head.description }}</p>
                        <div slot="reference">
                            {{ scope.row.head.name }}<br/>
                        </div>
                    </el-popover>
                </el-row>
                <el-row><Slots :slots="scope.row.head.slots"></Slots></el-row>
                <el-row><ArmorSkills :skills="scope.row.head.skills"></ArmorSkills></el-row>
            </template>
        </el-table-column>
        <el-table-column prop="chest" :label="$i18n.chest"></el-table-column>
        <el-table-column prop="arms" :label="$i18n.arms"></el-table-column>
        <el-table-column prop="waist" :label="$i18n.waist"></el-table-column>
        <el-table-column prop="legs" :label="$i18n.legs"></el-table-column>
    </el-table>
</template>
<script>

import Slots from "../components/Slots"
import ArmorSkills from "../components/ArmorSkills"

export default {
    components: {
        Slots,
        ArmorSkills
    },
    computed: {
        armors() {
            let result = []
            for(let key in this.$MH.armors) {
                // deep copy an object
                var armor = this.$MH.armors[key].load(this.$lang)
                armor.rankText = this.$getRank(armor.rank)
                result.push(armor)
            }
            return result
        }
    },
}
</script>
