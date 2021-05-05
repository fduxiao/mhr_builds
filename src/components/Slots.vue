<template>
    <div class="left">
        <Diamond :n="three[0]"></Diamond>
        <Diamond :n="three[1]"></Diamond>
        <Diamond :n="three[2]"></Diamond>
    </div>
</template>
<script>
import Diamond from "../components/Diamond"

export default {
    name: 'Slots',
    components: {Diamond},
    props: {
        slots: Array
    },
    computed: {
        three() {
            let slots = [0, 0, 0]
            if(this.slots.length >= 1) {
                slots[0] = this.slots[0]
            }
            if(this.slots.length >= 2) {
                slots[1] = this.slots[1]
            }
            if(this.slots.length >= 3) {
                slots[2] = this.slots[2]
            }
            return slots
        },
    }
}
</script>
<style scoped>
    .left > * {
        float: left;
    }
</style>