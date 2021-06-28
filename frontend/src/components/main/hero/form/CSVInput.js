import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {addErrors, removeErrors} from "../../../../store/ui/home/newProjectForm"
function Form() {
    const {errors} = useSelector((state) => state.ui.home.newProjectForm)
    const dispatch = useDispatch()
    const rowClasses = ["form-row"]
    let errDisplay = "none" 
    if(errors.wrongFileType) {
        rowClasses.push("input-error") 
        errDisplay ="block" 
    }
    function changeEvent(e){
        //
        const fileType = e.target.files[0].name.split(".")[1]
        const acceptedFileTypes = ["csv"]
        const fileMessage = (
            acceptedFileTypes.count === 0 ?  `No File Types are Accepted` :
            acceptedFileTypes.count === 1 ? `The file selected is a .${fileType} file. Please Upload  ${acceptedFileTypes[0]} File.` :
            acceptedFileTypes.count > 2 ? `The file selected is a .${fileType} file. Please Upload either ${acceptedFileTypes.slice(0, acceptedFileTypes.count-1).join(", ")} or ${acceptedFileTypes[acceptedFileTypes.count-1]} File.` : null
        )
        const correctFile = acceptedFileTypes.includes(fileType)
        if(correctFile)dispatch(removeErrors({errors: ["wrongFileType"]}))
        if(correctFile)dispatch(addErrors({errors: {wrongFileType: fileMessage}}))
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