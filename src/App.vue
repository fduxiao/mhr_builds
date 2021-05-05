<template>
    <el-container style="height:100%">
        <el-header style="padding: 0;">
            <Navbar/>
        </el-header>

        <el-main style="height: 100%; flow: auto">
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import Navbar from "./components/Navbar"

export default {
    name: "App",
    components: {
        Navbar
    }
}
</script>
