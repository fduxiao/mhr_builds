<template>
    <div>
        <h1>{{ $i18n.welcome }}</h1>
        <div>{{ $i18n.currentLanguage }}</div>
        <div>{{ $i18n.$lang }}</div>
        <div>
            <span>{{ $i18n.selectLanguage }}</span>
            <el-button plain @click="$setLang('zh_CN')">中文</el-button>
            <el-button plain @click="$setLang('en_US')">English</el-button>
        </div>
        <div>
            <span v-if="$i18n.$lang == 'en_US'">English Content</span>
            <span v-else-if="$i18n.$lang == 'zh_CN'">中文内容</span>
            <span v-else>Other Language</span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Lang',
}
</script>
