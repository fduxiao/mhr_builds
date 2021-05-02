<template>
    <el-container>
        <el-header>
            <Navbar/>
        </el-header>

        <el-main>
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
