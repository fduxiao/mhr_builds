<template>
    <div>
        <el-row><b>{{decoration.name}}</b><Diamond :n="decoration.level"/></el-row>
        <ShowMaterials :value="value" @input="$emit('input', $event)" :materials="decoration.materials"></ShowMaterials>
    </div>
</template>
<script>
import Diamond from "./Diamond"
import ShowMaterials from "./ShowMaterials"

export default {
    name: "Decoration",
    components: {
        Diamond,
        ShowMaterials
    },
    props: {
        decoration: Object,
        value: Boolean
    }
}
</script>
