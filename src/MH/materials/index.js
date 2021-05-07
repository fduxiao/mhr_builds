import materials from './materials.json'


 class Material {
    constructor(data) {
        this.data = data
    }

    setLang(lang) {
        // deep copy
        var material = JSON.parse(JSON.stringify(this.data))
        material.name = material.name[lang]
        material.description = material.description[lang]

        // i18n support
        for(let i in material.sources) {
            if(material.sources[i].type === "other") {
                material.sources[i].content = material.sources[i].content[lang]
            }
        }
        return material
    }
}

function loadJSON(obj) {
    let result = {}
    for(let key in obj) {
        result[key] = new Material(obj[key])
    }
    return result
}


export default {
    materials: {
        ...loadJSON(materials)
    },
    Material
}
