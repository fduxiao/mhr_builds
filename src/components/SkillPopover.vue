<template>
    <popover :dependent="skillPopover" placement="left">
        <el-row>
            <popover :debug="true" v-if="skill.decoration" v-model="skillPopover" :dependent="decorationPopover" placement="left">
                <Decoration @input="decorationPopover = $event" :decoration="skill.decoration"/>
                <el-link type="primary" slot="reference">
                    {{skill.name}}<Diamond :n="skill.decoration.level"></Diamond>
                </el-link>
            </popover>
            <b v-else>{{skill.name}}</b>
        </el-row>
        <el-row>
        {{skill.description}}
        </el-row>
        <el-divider></el-divider>
        <SkillLevels :levels="skill.levels"></SkillLevels>
        <el-row slot="reference">
            <el-col :span="20">
                <el-link type="primary" >
                    {{skill.name}} <Diamond v-if="skill.decoration" :n="skill.decoration.level"></Diamond>
                </el-link>
            </el-col>
            <el-col :span="4">{{skill.level}}</el-col>
        </el-row>
    </popover>
</template>

<script>
import Diamond from "./Diamond"
import Decoration from "./Decoration"
import SkillLevels from './SkillLevels'

export default {
    name: "SkillPopover",
    components: {
        Diamond,
        Decoration,
        SkillLevels
    },
    data() {
        return {
            skillPopover: false,
            decorationPopover: false
        }
    },
    props: {
        skill: {
            type: Object,
            require: true
        }
    }
}
</script>