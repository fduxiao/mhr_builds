<template>
    <div>
        <el-row>
            <popover :dependent="materialsPopover" placement="left">
                <p>{{ armor.description }}</p>
                <ShowMaterials v-model="materialsPopover" :materials="armor.materials"/>
                <div slot="reference">
                    <el-link type="primary">{{ armor.name }}</el-link>
                </div>
            </popover>
        </el-row>
        <el-row><Slots :slots="armor.slots"></Slots></el-row>
        <el-row><ArmorSkills :skills="armor.skills"></ArmorSkills></el-row>
    </div>
</template>
<script>
import Slots from "./Slots"
import ArmorSkills from "./ArmorSkills"
import ShowMaterials from "./ShowMaterials"

export default {
    name: "ShowArmor",
    components: {
        Slots,
        ArmorSkills,
        ShowMaterials
    },
    data() {
        return {
            materialsPopover: false
        }
    },
    props: {
        armor: {
            type: Object,
            required: true
        }
    }
}
</script>