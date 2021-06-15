import {toTitleCase } from '../../utilities/utilities'
import Datalist from './Datalist'
const  InputGroup = props => {
    let  {type, id, name, changeFunc, classInput, value, hasLabel, errorMessage, list} = props
    const anon = ()=>{}
    const listId = list || list?.count !== 0 ? (id || name) + "List" : ""
    changeFunc = changeFunc || anon
    type = type || "text"
    hasLabel =  hasLabel !== false 
    
    classInput = classInput || []
    classInput.push("input-group")
    const classValue = classInput.join(" ")

    const labelValue = hasLabel ? <label htmlFor={id || name}>{toTitleCase(name)}</label> : ""
    const inputValue = <input type={type} id={id || name} name={name || id} onChange={changeFunc} value={value} list={listId}/>
    const errorValue = errorMessage ? <p className="error-input">{errorMessage}</p> : ""

   return  <div className={classValue} >
                {labelValue}
                {inputValue}
                {listId ? <Datalist id={listId} options={list}/> : ""}
                {errorValue}
    </div>
}
export default InputGroup;