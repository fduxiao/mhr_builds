import skills from './skills.json'


export class Skill {
    constructor(data) {
        this.data = data
    }

    setLang(lang) {
        // deep copy
        var skill = JSON.parse(JSON.stringify(this.data))
        skill.name = skill.name[lang]
        skill.description = skill.description[lang]
        skill.max = skill.levels.length
        for(let i in skill.levels) {
            skill.levels[i] = skill.levels[i][lang]
        }

        skill.decoration.name = skill.decoration.name[lang]
        return skill
    }
}

function loadJSON(obj) {
    let result = {}
    for(let key in obj) {
        result[key] = new Skill(obj[key])
    }
    return result
}


export default {
    skills: {
        ...loadJSON(skills)
    },
    Skill
}
