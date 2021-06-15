export const toJSX = varName => str => {
     return {[varName + "Value"]: str ? `${varName}={${str}}` : ""}
} 