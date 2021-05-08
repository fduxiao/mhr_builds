<template>
    <el-popover :value="show" trigger="manual" :placement="placement">
        <div @mouseenter="content = true; emitInput()" @mouseleave="content = false; emitInput()">
            <slot></slot>
        </div>
        <div slot="reference" @mouseenter="refEnter" @mouseleave="refLeave">
            <slot name="reference"></slot>
        </div>
    </el-popover>
</template>
<script>
export default {
    name: "Popover",
    data() {
        return {
            reference: false,
            content: false
        }
    },
    computed: {
        show() {
            return this.value || this.content || this.reference || this.dependent
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        placement: String,
        dependent: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        debug: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        dependent() {
            this.emitInput()
        }
    },
    methods: {
        emitInput() {
            this.$emit('input', this.content || this.reference || this.dependent)
        },
        refEnter() {
            this.reference = true
            this.emitInput()
        },
        refLeave() {
            setTimeout(() => {
                this.reference = false
                this.emitInput()
            }, 200);
        }
    }
}
</script>

<style scoped>
    div {
        width: 100%;
        height: 100%;
        border: none
    }
</style>
