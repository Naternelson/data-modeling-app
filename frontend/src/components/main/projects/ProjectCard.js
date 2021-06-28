import Card from "../../cards/CardComponents/Card";
import CardDescription from "../../cards/CardComponents/CardDescription";
import {  toTitleCase } from "../../../utilities/capitalize";
import Btn, { ButtonGroup } from "../../buttons/buttons";
import { useDispatch } from "react-redux";
import {patchProject, deleteProject} from '../../../store/entities/projects'

const ProjectCard = props => {
    const {name, model, status, id} = props
    const dispatch = useDispatch()

    let cssClasses = [`project-${status}`]
    const beginClick = id => () => {
        const data = {id, status: "computing"}
        dispatch(patchProject(data))
    }
    const pauseClick = id => () => {
        const data = {id, status: "paused"}
        dispatch(patchProject(data))
    }
    const deleteClick = id => () =>{
        dispatch(deleteProject({id}))
    }

    const beginBtn = <Btn onClick={beginClick(id)} value={"Begin"}/>
    const pauseBtn = <Btn onClick={pauseClick(id)} value={"Pause"}/>
    const deleteBtn = <Btn onClick={deleteClick(id)} value={"Delete"}/>
    const displayBtn = status === "computing" ? pauseBtn : status === "paused" || status === "uninitiated" ? beginBtn : ""

    return <Card cssClasses={cssClasses}>
        <CardDescription title={name} body={`${toTitleCase(model)} -- ${toTitleCase(status)}`}/>
        <ButtonGroup>
            {displayBtn}
            {deleteBtn}
        </ButtonGroup>
    </Card>
 }
 export default ProjectCard;