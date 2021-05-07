<template>
    <el-table :data="skills" border height="100%" style="width: 100%;">
        <el-table-column prop="name" :label="$i18n.name"></el-table-column>
        <el-table-column prop="description" :label="$i18n.description"></el-table-column>
        <el-table-column prop="levels" :label="$i18n.skillLevels"></el-table-column>
        <el-table-column prop="decoration" :label="$i18n.decoration">
            <template slot-scope="scope">
                <Decoration :decoration="scope.row.decoration"/>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import Decoration from './Decoration'
export default {
    name: 'SkillList',
    components: {
        Decoration
    },
    computed: {
        skills() {
            let result = []
            for(let key in this.$MH.skills) {
                let skill = this.$MH.skills[key].setLang(this.$lang)
                result.push(skill)
            }
            return result
        }
    }
}
</script>
