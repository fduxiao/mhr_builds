<template>
    <div>
        <el-row v-for="skill in realSkills" :key="skill.name">
            <SkillPopover :skill="skill"></SkillPopover>
        </el-row>
    </div>
</template>
<script>

import SkillPopover from "./SkillPopover"

export default {
    name: "ArmorSkills",
    components: {
        SkillPopover,
    },
    data() {
        return {
            skillPopover: {},
            decorationPopover: {}
        }
    },
    props: {
        skills: Array
    },
    computed: {
        realSkills() {
            let result = []
            for(const [id, level] of this.skills) {
                let skill = this.$MH.skills[id].setLang(this.$lang)
                skill.id = id
                skill.level = level
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