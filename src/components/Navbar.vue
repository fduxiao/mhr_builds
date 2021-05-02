<template>
    <el-menu :default-active="currentPath" mode="horizontal" :router="true">
        <el-menu-item index="/">{{$i18n.welcome}}</el-menu-item>
        <el-menu-item index="/quickbuild">{{$i18n.quickBuild}}</el-menu-item>


        <el-submenu index="language" style="float: right">
            <template slot="title">Language</template>
            <el-menu-item @click="$setLang('en_US')">English</el-menu-item>
            <el-menu-item @click="$setLang('zh_CN')">简体中文</el-menu-item>
        </el-submenu>
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