export const findIn = el => selector => {
    const selectors = [
        selector,
        `#${selector}`,
        `input[name=${selector}]`,
        `select[name=${selector}]`,
        `.${selector}`
    ]
    for(let s of selectors){
        const result = el.querySelector(s)
        if (result) return result
    }

}