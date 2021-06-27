import {toTitleCase } from '../../utilities/utilities'
import Datalist from './Datalist'
import Select from './Select'
const  InputGroup = props => {
    //Declarations
    let  {type, id, name, label, onChange, onBlur, classInput, value, hasLabel, errorMessage, options, placeholder} = props
    const anon = ()=>{}

    //Defaults
    const listId = !options || options?.count === 0 ? "" : (id || name) + "List"
    onChange = onChange || anon
    type = type || "text"
    hasLabel =  hasLabel !== false 
    classInput = classInput || []
    classInput.push("input-group")
    const classValue = classInput.join(" ")

    //Conditional Return Values
    const labelValue = hasLabel ? <label htmlFor={id || name}>{label || toTitleCase(name)}</label> : ""
    const inputValue = (type === "select") ? 
        <Select options={options} type={type} id={id || name} name={name || id} onBlur={onBlur} onChange={onChange} placeholder={placeholder} value={value} list={listId} />  :
        <input type={type} id={id || name} name={name || id} onBlur={onBlur} onChange={onChange} placeholder={placeholder} value={value} list={listId}/>
    const errorValue = errorMessage ? <p className="error-input">{errorMessage}</p> : ""

    //render
    return  <div className={classValue} >
        {labelValue}
        {inputValue}
        {listId && type !== "select" ? <Datalist id={listId} options={options}/> : ""}
        {errorValue}
    </div>
}
export default InputGroup;