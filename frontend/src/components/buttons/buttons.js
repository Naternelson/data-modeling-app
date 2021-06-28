import { NavLink } from 'react-router-dom';
import './Button.css'
export const SubmitBtn = props => {
    let {value, classArr, onClick} = props
    value = value ? value : "Submit"
    return <Btn type={"submit"} classArr={classArr} onClick={onClick} value={value}/>
}

export const ButtonGroup = props => {
    const {children} = props
    return <div className={"button-group"}>{children}</div>
}

const Btn = props => {
    let {value, classArr, onClick, type, to} = props
    const className = Array.isArray(classArr) ? classArr.join(" ") : ""
    const anon = ()=>{}
    type = type ? type : "button"
    onClick = typeof onClick === "function" ? onClick : anon 
    const btn =  <button className={className} type={type} onClick={onClick}>{value}</button> 
    const result = to ? <NavLink to={to}>{btn}</NavLink> : btn
    return result
}



export default Btn