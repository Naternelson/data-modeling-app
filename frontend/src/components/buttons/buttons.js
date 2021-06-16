export const SubmitBtn = props => {
    let {value, classArr, onClick} = props
    value = value ? value : "Submit"
    return <Btn type={"submit"} classArr={classArr} onClick={onClick} value={value}/>
}
const Btn = props => {
    let {value, classArr, onClick, type} = props
    const className = Array.isArray(classArr) ? classArr.join(" ") : ""
    const anon = ()=>{}
    type = type ? type : "button"
    onClick = typeof onClick === "function" ? onClick : anon 
    return <button className={className} type={type} onClick={onClick}>{value}</button> 
}

export default Btn