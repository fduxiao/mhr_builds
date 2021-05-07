<template>
    <el-table :show-header="false" :data="realMaterials" style="width:100%">
        <el-table-column prop="name">
            <template slot-scope="scope">
                <popover @input="input(scope.row.id, $event)" placement="left">
                    <el-row v-for="source in scope.row.sources" :key="source.type+source.content+source.target">
                        <div v-if="source.type === 'other'">{{source.content}}</div>
                        <div v-if="source.type === 'monster'" :set="monster=$getMonster(source.target).setLang($lang)">
                            <div>{{monster.name}}</div>
                        </div>
                    </el-row>
                    <div slot="reference">
                        <el-link type="primary">{{ scope.row.name }}</el-link>
                    </div>
                </popover>
            </template>
        </el-table-column>
        <el-table-column prop="number"></el-table-column>
    </el-table>
</template>
<script>
export default {
    props: {
        materials: Array,
        value: Boolean
    },
    data() {
        return {
            sourcePopover: {}
        }
    },
    computed: {
        realMaterials() {
            let result = []
            for(const [id, number] of this.materials) {
                let material = this.$MH.materials[id].setLang(this.$lang)
                material.id = id
                material.number = number
                result.push(material)
            }
            return result
        }
    },
    methods: {
        input(id, val) {
            if(val) {
                this.sourcePopover[id] = true
            } else {
                delete this.sourcePopover[id]
            }
            this.$emit('input', Boolean(Object.keys(this.sourcePopover).length))
        }
    }
}
</script>
