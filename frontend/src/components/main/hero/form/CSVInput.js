import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {formNotReady, transitionFormOn, focusForm, addErrors, removeErrors} from "../../../../store/ui/home/CSVForm"
function Form() {
    const {status, errors} = useSelector((state) => state.ui.home.CSVForm)
    const dispatch = useDispatch()
    const rowClasses = ["form-row"]
    let errDisplay = "none" 
    if(errors.wrongFileType) {
        rowClasses.push("input-error") 
        errDisplay ="block" 
    }
    function changeEvent(e){
        const fileType = e.target.files[0].name.split(".")[1]

        switch(fileType){
            case "csv":
                dispatch(removeErrors({errors: ["wrongFileType"]}))
                dispatch(transitionFormOn())
                setTimeout(() => dispatch(focusForm()), (1000));
                break
            default:
                dispatch(addErrors({errors: {
                    wrongFileType: `The file selected is a .${fileType} file. Please Upload a .csv File.`
                }}))
                if (status === "ready") dispatch(formNotReady())
        }
    }
    return (
        <div className={rowClasses.join(" ")}>
            <label className={"input-btn"} htmlFor={"upload-csv"}>Upload a CSV File</label>
            <input onChange={changeEvent} type={"file"} accept={".csv"} id={"upload-csv"} name={"upload-csv"} style={{visibility: `hidden`}}/>
            <p className={"error-message"} style={{display: errDisplay}}>{errors.wrongFileType}</p>
        </div>
    )
}

export default Form;