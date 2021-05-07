import monsters from './monsters.json'


class Monster {
    constructor(data) {
        this.data = data
    }

    setLang(lang) {
        // deep copy
        var monster = JSON.parse(JSON.stringify(this.data))
        monster.name = monster.name[lang]
        monster.hunting = monster.hunting[lang]
        return monster
    }
}

function loadJSON(obj) {
    let result = {}
    for(let key in obj) {
        result[key] = new Monster(obj[key])
    }
    return result
}


export default {
    monsters: {
        ...loadJSON(monsters)
    },
    Monster
}
