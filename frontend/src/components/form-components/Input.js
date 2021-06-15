import {toTitleCase } from '../../utilities/utilities'
import Datalist from './Datalist'
const  InputGroup = props => {
    let  {type, id, name, label, changeFunc, classInput, value, hasLabel, errorMessage, options} = props
    const anon = ()=>{}
    const listId = !options || options?.count === 0 ? "" :(id || name) + "List"
    console.log(!!options, options?.count !== 0, listId)
    changeFunc = changeFunc || anon
    type = type || "text"
    hasLabel =  hasLabel !== false 
    
    classInput = classInput || []
    classInput.push("input-group")
    const classValue = classInput.join(" ")

    const labelValue = hasLabel ? <label htmlFor={id || name}>{label || toTitleCase(name)}</label> : ""
    const inputValue = <input type={type} id={id || name} name={name || id} onChange={changeFunc} value={value} list={listId}/>
    const errorValue = errorMessage ? <p className="error-input">{errorMessage}</p> : ""

   return  <div className={classValue} >
                {labelValue}
                {inputValue}
                {listId ? <Datalist id={listId} options={options}/> : ""}
                {errorValue}
    </div>
}
export default InputGroup;