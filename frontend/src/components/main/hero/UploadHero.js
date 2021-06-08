import "./Hero.css"
import React, {useEffect} from 'react'

function UploadHero() {
    useEffect
    function changeEvent(e){
        console.log("hello worlds", e.target.name)
    }   
    return (
    <div className={"hero"}>
        <img src={"/upload-hero.jpg"} alt={"upload-icon"}></img>
        <form>
            <label htmlFor={"upload-csv"}>Upload a CSV File</label>
            <input onChange={changeEvent} type={"file"} accept={".csv"} id={"upload-csv"} name={"upload-csv"} style={{visibility: `hidden`}}/>
        </form>
    </div>
    )
}

export default UploadHero;
