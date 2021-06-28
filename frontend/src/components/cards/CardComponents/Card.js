const Card = (props) => {
    let {cssClasses, children} = props
    if (Array.isArray(cssClasses)) {
        cssClasses.push("card")
        cssClasses = cssClasses.join(" ")
    } else {
        cssClasses = "card"
    }
    return <div className={cssClasses}>{children}</div>
}
export default Card