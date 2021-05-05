<template>
    <el-menu :default-active="currentPath" mode="horizontal" :router="true">
        <el-menu-item index="/">{{$i18n.welcome}}</el-menu-item>
        <el-menu-item index="/quickbuild">{{$i18n.quickBuild}}</el-menu-item>
        <el-menu-item index="/armors">{{$i18n.armors}}</el-menu-item>
        <el-menu-item index="/weapons">{{$i18n.weapons}}</el-menu-item>
        <el-menu-item index="/skills">{{$i18n.skills}}</el-menu-item>
        <el-menu-item index="/monsters">{{$i18n.monsters}}</el-menu-item>
        <el-menu-item index="/materials">{{$i18n.materials}}</el-menu-item>

        <el-submenu index="language" style="float: right">
            <template v-if="$i18n.$lang == 'en_US'" slot="title">Language/English</template>
            <template v-else-if="$i18n.$lang == 'zh_CN'" slot="title">Language/简体中文</template>
            <template v-else slot="title">Language</template>
            <el-menu-item @click="$setLang('en_US')">English</el-menu-item>
            <el-menu-item @click="$setLang('zh_CN')">简体中文</el-menu-item>
        </el-submenu>
        <el-menu-item style="float: right"><i class="el-icon-upload2"></i></el-menu-item>
        <el-menu-item style="float: right"><i class="el-icon-download"></i></el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: "Navbar",
    computed: {
        currentPath() {
            return this.$route.path
        }
    },
}
</script>
