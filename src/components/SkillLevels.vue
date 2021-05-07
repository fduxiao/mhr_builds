<template>
    <el-table :show-header="false" :data="realLevels">
        <el-table-column prop="name"></el-table-column>
        <el-table-column prop="value"></el-table-column>
    </el-table>
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
                let name = this.levels[i]
                if(!name instanceof String) {
                    name = name[this.$lang]
                }
                levels.push({
                    name: name,
                    value: i+1
                })
            }
            return levels
        }
    }
}
</script>
