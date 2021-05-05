<template>
    <div style="height:100%">
        <el-row style="height:20%">
            <SkillSelector/>
        </el-row>
        <el-row style="height:80%"><ArmorList></ArmorList></el-row>
    </div>
</template>
<script>
import ArmorList from "../components/ArmorList"
import SkillSelector from "../components/SkillSelector"
export default {
    components: {
        ArmorList,
        SkillSelector
    }
}
</script>
