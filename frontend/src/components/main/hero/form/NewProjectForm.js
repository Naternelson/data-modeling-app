import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStateSetter} from '../../../../utilities/utilities'
import Form, {Input} from "../../../form-components/Form";
import { RedirectIfLoggedOut, IsLoggedIn } from '../../../routes/Redirects';
import { SubmitBtn } from '../../../buttons/buttons'
import { formCleared, uploadProject, formLoading, modelChanged, projectNameChanged, fileIsAbsent, fileIsPresent, STATUS } from '../../../../store/forms/project-upload-form';
import { useHistory } from 'react-router-dom';


const NewProjectForm = (props) => {

    //hooks
    const dispatch = useDispatch()
    const history = useHistory()
    const stateSetter = useStateSetter()
    const [file, setFile] = useState(null)
    const {name, model, status} = useSelector(s => s.forms.newProject)
    const modelChange = val => dispatch(modelChanged({model: val}))
    const nameChange = val => dispatch(projectNameChanged({name: val}))
    const fileChange = e => {
        e ? dispatch(fileIsPresent()) : dispatch(fileIsAbsent())
        setFile(e.target.files[0])
    }
    //events
    const submitEvent = () => {
        const data = new FormData()
        data.append("attachment", file, file.name)
        data.append("name", name)
        data.append("model", model)
        dispatch(uploadProject(data))
        dispatch(formLoading())
    }
    if (status === STATUS.sumbitted){
        dispatch(formCleared())
        history.push("/projects")
    }

    //declarations
    const options = ["choice-model"]
    const cssClasses = props.loading ? ["loading"] : []
    
    //render
    const render = !IsLoggedIn() ? <RedirectIfLoggedOut/> : <Form cssClasses={cssClasses} submit={submitEvent}>
        <Input name="name" type="text" onChange={stateSetter(nameChange)} value={name}/>
        <Input name="attachment" type="file" onChange={fileChange}/>
        <Input name="model" type="select" options={options} onChange={stateSetter(modelChange)} value={model} placeholder={"Select a Data Model Algorithm"}/>
        <SubmitBtn/>
    </Form>
    return  render
}
export default NewProjectForm;