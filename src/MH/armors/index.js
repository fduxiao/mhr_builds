import high from './high.json'


class Armor {
    constructor(data) {
        this.data = data
    }

    load(lang) {
        // deep copy
        var armor = JSON.parse(JSON.stringify(this.data))
        armor.name = armor.name[lang]

        // i18n support
        for(const part of ["head", "chest", "arms", "waist", "legs"]) {
            if(armor[part]) {
                armor[part].name = armor[part].name[lang]
                armor[part].description = armor[part].description[lang]
            }
        }
        return armor
    }
}

function addLoad(obj) {
    let result = {}
    for(let key in obj) {
        result[key] = new Armor(obj[key])
    }
    return result
}


export default {
    ...addLoad(high)
}
