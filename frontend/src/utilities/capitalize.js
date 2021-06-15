export  function capitalize(input, deliminter){
    if (deliminter) input = input.split(deliminter)
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
export const toTitleCase = str => {
    let r = str.replace( /([A-Z])/g, " $1" )
    return capitalize(r, " ")
}
