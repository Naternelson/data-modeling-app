import {toTitleCase, toJSX, unless } from '../../utilities/utilities'
function InputGroup(props = {type: "text", hasLabel: true,  changeFunc: ()=>{}}) {
    let  {type, id, name, changeFunc, classInput, value, required, hasLabel, errorMessage} = props
    const anon = ()=>{}
    changeFunc = changeFunc || anon
    type = type || "text"
    hasLabel =  hasLabel !== false 
    classInput = classInput || []
    classInput.push("input-group")
    const classValue = classInput.join(" ")

    const labelValue = hasLabel ? <label htmlFor={id || name}>{toTitleCase(name)}</label> : ""
    const inputValue = <input type={type} id={id || name} name={name || id} onChange={changeFunc} value={value}/>
    const errorValue = errorMessage ? <p className="error-input">{errorMessage}</p> : ""

   return  <div className={classValue} >
                {labelValue}
                {inputValue}
                {errorValue}
    </div>
}
export default InputGroup;