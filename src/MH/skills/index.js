import skills from './skills.json'


class Skills {
    constructor(data) {
        this.data = data
    }

    load(lang) {
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

function addLoad(obj) {
    let result = {}
    for(let key in obj) {
        result[key] = new Skills(obj[key])
    }
    return result
}


export default {
    ...addLoad(skills)
}
