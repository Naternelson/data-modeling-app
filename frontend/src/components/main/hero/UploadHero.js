import "./Hero.css"
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { changeCSV } from '../../../store/forms/newCSV'
function UploadHero() {
    const dispatch = useDispatch();


    // useEffect(()=>{
    //     dispatch(changeCSV())
    // }, [])
    function changeEvent(e){
        console.log(e.target.files[0].name)
        // dispatch()
    }

    return (
    <div className={"hero"}>
        <img src={"/upload-hero.jpg"} alt={"upload-icon"}></img>
        <form onSubmit={(e)=> e.preventDefaults()}>
            <label htmlFor={"upload-csv"}>Upload a CSV File</label>
            <input onChange={changeEvent} type={"file"} accept={".csv"} id={"upload-csv"} name={"upload-csv"} style={{visibility: `hidden`}}/>
        </form>
    </div>
    )
}

export default UploadHero;
