export default function capitalize(input){
    const inputType = Array.isArray(input) ? "array" : typeof input
    let upCaseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    switch(inputType){
        case "string":
            return upCaseFirstLetter(input)
        case "array":
            return input.map(word => upCaseFirstLetter(word)).join(" ")
        default:
            return null
    }
}