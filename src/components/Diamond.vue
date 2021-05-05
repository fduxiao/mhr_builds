<template>
    <div class="diamond">{{n}}</div>
</template>
<script>
export default {
    name: 'Diamond',
    props: {
        n: Number,
    }
}
</script>
<style scoped>
    .diamond {
        text-align: center;
        display: inline-block;
        height: 20px;
        width: 20px;
        background: lightgray;
        clip-path: polygon(15% 0, 85% 0, 100% 15%, 100% 40%, 70% 100%, 30% 100%, 0 40%, 0 15%);
    }
</style>
