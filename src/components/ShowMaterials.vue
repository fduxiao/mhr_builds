<template>
    <div>
        <el-row v-for="(material, index) in realMaterials" :key="material.id">
            <el-divider v-if="index != 0"></el-divider>
            <el-col :span="12" style="word-break: break-word;">
                <popover @input="input(material, $event)" placement="left">
                    <el-row v-for="source in material.sources" :key="source.type+source.content+source.target">
                        <div v-if="source.type === 'other'">{{source.content}}</div>
                        <div v-if="source.type === 'monster'" :set="monster=$getMonster(source.target).setLang($lang)">
                            <div>{{monster.name}}</div>
                        </div>
                    </el-row>
                    <div slot="reference">
                        <el-link type="primary">{{ material.name }}</el-link>
                    </div>
                </popover>
            </el-col>
            <el-col :span="12" style="text-align: center"> {{ material.number }}</el-col>
        </el-row>
    </div>
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
