<template>
    <div class="home">
        <el-row>
            <el-col :span="4">
                <el-card :body-style="{padding: '0px'}">
                    <el-image
                        style="width: 100%; display: block"
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" fit="none"></el-image>
                    <div style="padding: 10px; width: calc(100%-20px); text-align: center">
                        <el-button type="text" @click="$router.push('/quickbuild')">{{$i18n.quickBuild}}</el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <h2>{{$i18n.buildList}}</h2>
        </el-row>
    </div>
</template>

<script>

export default {
    name: 'Home', 
    data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
