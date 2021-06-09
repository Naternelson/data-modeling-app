import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {formNotReady, transitionFormOn, focusForm, addErrors, removeErrors} from "../../../../store/ui/home/CSVForm"
function Form() {
    const {focus, status, errors} = useSelector((state) => state.ui.home.CSVForm)
    const dispatch = useDispatch()

    function changeEvent(e){
        const fileType = e.target.files[0].name.split(".")[1]
        switch(fileType){
            case "csv":
                dispatch(removeErrors("wrongFileType"))
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
        <div className={"form-row"}>
            <label htmlFor={"upload-csv"}>Upload a CSV File</label>
            <input onChange={changeEvent} type={"file"} accept={".csv"} id={"upload-csv"} name={"upload-csv"} style={{visibility: `hidden`}}/>
        </div>
    )
}

export default Form;