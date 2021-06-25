import React from 'react'
import {capitalize} from '../../../../utilities/utilities'
import { useSelector, useDispatch } from "react-redux"
import { changeCSVModel } from '../../../../store/forms/project-upload-form'
import {formNotReady, addErrors, removeErrors} from "../../../../store/ui/home/CSVForm"
function Form() {
    const {errors} = useSelector((state) => state.ui.home.CSVForm)
    const dispatch = useDispatch()
    const rowClasses = ["form-row"]
    const options = ["choice-model"]
    const optionGroup = options.map( o => <option key={o} value={o}>{capitalize(o.split("-"))}</option>)
    optionGroup.unshift(<option key={optionGroup.count} data-default value={""}>{"Choose a Data Model"}</option>)
    let errDisplay = "none" 
    if(errors.noDataModelSelected) {
        rowClasses.push("input-error")
        errDisplay ="block" 
    }

    function changeEvent(e){
        dispatch(changeCSVModel({name: e.target.value}))
    }
    function blurEvent(e){
        if (!e.target.value){ 
            dispatch(addErrors({errors: {noDataModelSelected: "You must select a Data Model for the given CSV File"}}))
            // dispatch(formNotReady())    
        } else {
            dispatch(removeErrors({errors: ["noDataModelSelected"]}))
        }
    }

    return (
        <div className={rowClasses.join(" ")}>
            <label htmlFor={"name-upload"}>DataModel</label>
            <select onBlur={blurEvent} onChange={changeEvent} id={"data-model"} name={"data-model"} required>
                {optionGroup}
            </select>
            <p className={"error-message"} style={{display: errDisplay}}>{errors.noDataModelSelected}</p>
        </div>
    )
}

export default Form;