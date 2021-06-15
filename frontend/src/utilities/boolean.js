export const unless = bool =>  func => {
    if(!bool) return func()
}

