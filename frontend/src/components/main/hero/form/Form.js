import React from 'react'
import CSVInput from "./CSVInput"
import NameInput from "./NameInput"
import DataModel from "./DataModel"
function Form() {

    
    let inputs = [
        <h1 key={1}>Start a New Project</h1>,
        <NameInput key={2}/>, 
        <CSVInput  key={3}/>, 
        <DataModel key={4}/>, 
        <button  key={5} type={"submit"} className={"btn btn-flat"}>Submit File</button>
    ]
   

    function submitEvent(e){
        e.preventDefault()
        
    }
    return <form id="csv-form" onSubmit={submitEvent}>{inputs}</form>
}
export default Form;