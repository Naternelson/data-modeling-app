import "./Hero.css"
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { focusForm}  from "../../../store/ui/home/newProjectForm"
import {CSSTransition} from 'react-transition-group'
import NewProjectForm from "./form/NewProjectForm"
import { useHistory } from "react-router-dom"

function UploadHero() {
    const {focus} = useSelector((state) => state.ui.home.newProjectForm)
    const {loading} = useSelector(s => s.forms.newProject)
    const isLoggedIn = useSelector(s => s.auth.token)
    const dispatch = useDispatch()
    const history = useHistory()
    function clickEvent(){
        if (isLoggedIn) return dispatch(focusForm())
        history.push('/login')
    }
    return (
    <div className={"hero"}>
        <CSSTransition in={focus === "focused"} timeout={1000} className={"csv-upload-node"} >
            <img id="upload-img" src={"/upload-hero.jpg"} alt={"upload-icon"} className={focus}/>
        </CSSTransition>
        <CSSTransition in={focus === "focused"} timeout={1000} className={"csv-form-node"} appear unmountOnExit>
                <NewProjectForm loading={loading}/>
        </CSSTransition>
        {focus === "blurred" && <button id={"open-csv-form"} onClick={clickEvent}>New Project</button>}
    </div>
    )
}

export default UploadHero;
