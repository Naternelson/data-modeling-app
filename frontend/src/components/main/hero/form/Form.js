import React, {useEffect} from 'react'
import { useSelector } from "react-redux"
import CSVInput from "./CSVInput"
function Form() {
    const {focus, status, errors} = useSelector((state) => state.ui.home.CSVForm)
    let inputs
    if (focus !== "focused") inputs = [<CSVInput/>]
    if(focus === "blured") inputs = <CSVInput/>
    return <form onSubmit={(e)=> e.preventDefaults()}>{inputs}</form>
}
export default Form;