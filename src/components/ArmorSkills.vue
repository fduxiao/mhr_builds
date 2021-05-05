<template>
    <div>
        <el-row v-for="skill in realSkills" :key="skill.name">
            <el-popover trigger="hover" placement="left">
                <el-row>
                    <el-popover v-if="skill.decoration" trigger="hover" placement="left">
                        <el-row><b>{{skill.decoration.name}}</b></el-row>
                        <div slot="reference">
                            <b>{{skill.name}}</b><Diamond :n="skill.decoration.level"></Diamond>
                        </div>
                    </el-popover>
                    <b v-else>{{skill.name}}</b>
                </el-row>
                <el-row>
                   {{skill.description}}
                </el-row>
                <el-divider></el-divider>
                <el-table :show-header="false" :data="skill.levels" style="width:100%">
                    <el-table-column prop="name"></el-table-column>
                    <el-table-column prop="value"></el-table-column>
                </el-table>
                <el-row slot="reference">
                    <el-col :span="20">
                        {{skill.name}} <Diamond v-if="skill.decoration" :n="skill.decoration.level"></Diamond>
                    </el-col>
                    <el-col :span="4">{{skill.level}}</el-col>
                </el-row>
            </el-popover>
        </el-row>
    </div>
</template>
<script>

import Diamond from "../components/Diamond"

export default {
    name: "ArmorSkills",
    components: {
        Diamond
    },
    props: {
        skills: Array
    },
    computed: {
        realSkills() {
            let result = []
            for(const [id, level] of this.skills) {
                let skill = this.$MH.skills[id].load(this.$lang)
                skill.level = level
                let levels = []
                for(let i = 0; i < skill.levels.length; i++) {
                    levels.push({
                        name: skill.levels[i],
                        value: i+1
                    })
                }
                skill.levels = levels
                result.push(skill)
            }
            return result
        }
    }
}
</script>

<style scoped>
    .text-center {
        text-align: center;
    }
</style>