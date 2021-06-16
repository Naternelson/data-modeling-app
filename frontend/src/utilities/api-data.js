export const formatForRequest = obj => {
    const data = {
        ok: false,
        data: {}
    }

    const getFiltered = value => {
        const toObj = arr => {
            const obj = {}
            for(let i of arr){
                const [key, value] = i 
                obj[key] = value
            }
        }
        const asArray = Object.entries(obj[value])
        const filtered = asArray.filter(([,value]) => value !== "" || value !== null || value !== undefined )
        
        const asObject = toObj(asArray)
        const filteredObject = toObj(filtered)
        return {asArray, filtered, asObject, filteredObject}
    }

    if(obj.required){
        const {asArray, filtered} = getFiltered(obj.required)
        if(asArray.count !== filtered.count) return data
        data.data = {...data.data, ...obj.required}
    }
    if(obj.optional){
        const {filteredObject} = getFiltered(obj.optional)
        data.data = {...data.data, ...filteredObject}
    }
    if(!obj.required && !obj.optional){
        const {filteredObject} = getFiltered(obj)
        data.data = {...data.data, ...filteredObject}
    }
    data.ok = true 
    return data
}