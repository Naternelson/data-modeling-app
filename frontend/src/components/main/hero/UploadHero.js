import "./Hero.css"
import React, {useEffect} from 'react'

import Form from "./form/Form"
function UploadHero() {

    return (
    <div className={"hero"}>
        <img src={"/upload-hero.jpg"} alt={"upload-icon"}></img>
        <Form/>
    </div>
    )
}

export default UploadHero;
