<template>
    <div style="height:100%">
        <el-row style="height:20%">
            SkillSelector
        </el-row>
        <el-row style="height:80%"><SkillList></SkillList></el-row>
    </div>
</template>
<script>

import SkillList from "../components/SkillList"

export default {
    components: {
        SkillList
    }
}
</script>
