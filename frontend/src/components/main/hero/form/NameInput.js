import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { changeCSVName } from '../../../../store/forms/project-upload-form'
function Form() {
    const csvName = useSelector((state)=> state.forms.newCSVForm.name)
    const dispatch = useDispatch()
    function changeEvent(e){
        dispatch(changeCSVName({name: e.target.value}))
    }
    return (
        <div className={"form-row"}>
            <label htmlFor={"name-upload"}>Name</label>
            <input onChange={changeEvent} type={"text"} id={"name-upload"} name={"name-upload"} value={csvName} max={255} required/>
        </div>
    )
}

export default Form;