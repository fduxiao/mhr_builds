import translate from "./translate"
import Cookies from "js-cookie"

export default class I18n {
    default = 'en_US'
    alias = {
        en: 'en_US',
        zh: 'zh_CN', 
        cn: 'zh_CN',
    }
    getValue(key, lang=undefined) {
        if(lang === undefined) {
            lang = this.lang
        }
        if(!(key in translate)) {
            throw `undefined key ${key}`
        }
        let value = translate[key]
        if(lang in value) {
            return value[lang]
        }
        let alter = this.alias[lang] || value.default || this.default
        return value[alter]
    }
    constructor(lang=undefined) {
        this.setLang(lang)
        this.cachedTrans = {}
    }
    setLang(lang=undefined) {
        if(lang === undefined) {
            lang = Cookies.get('lang') || this.default
        }
        this.lang = lang
        Cookies.set('lang', lang)
    }
    getTrans(lang=undefined) {
        if(lang === undefined) {
            lang = this.lang
        }
        let trans = this.cachedTrans[lang]
        if(trans === undefined) {
            trans = {}
            for(let key in translate) {
                trans[key] = this.getValue(key, lang)
            }
            this.cachedTrans[lang] = trans
        }
        trans.$lang = lang
        return trans
    }
}
