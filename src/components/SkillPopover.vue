<template>
    <popover :dependent="skillPopover" placement="left">
        <el-row>
            <popover :debug="true" v-if="skill.decoration" v-model="skillPopover" :dependent="decorationPopover" placement="left">
                <Decoration @input="a($event)" :decoration="skill.decoration"/>
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
        <el-table :show-header="false" :data="skill.levels" style="width:100%">
            <el-table-column prop="name"></el-table-column>
            <el-table-column prop="value"></el-table-column>
        </el-table>
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

export default {
    name: "SkillPopover",
    methods: {
        a(val) {
            this.decorationPopover = val
        }
    },
    components: {
        Diamond,
        Decoration
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