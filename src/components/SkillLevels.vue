<template>
    <div>
        <el-row v-for="level of realLevels" :key="level.value">
            <el-divider v-if="level.value != 1"></el-divider>
            <el-col :span="12" style="word-break: break-word;">{{level.description}}</el-col>
            <el-col :span="12" style="text-align: center">{{level.value}}</el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    props: {
        levels: Array
    },
    computed: {
        realLevels(){
            let levels = []
            for(let i = 0; i < this.levels.length; i++) {
                let description = this.levels[i]
                if(description instanceof Object) {
                    description = description[this.$lang]
                }
                levels.push({
                    description: description,
                    value: i+1
                })
            }
            return levels
        }
    }
}
</script>
