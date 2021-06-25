import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as project from '../../../../store/forms/project-upload-form';
import { useStateSetter} from '../../../../utilities/utilities'
import Form, {Input} from "../../../form-components/Form";
import { RedirectIfLoggedOut } from '../../../routes/Redirects';
import { SubmitBtn } from '../../../buttons/buttons'

const NewProjectForm = () => {

    //hooks
    const dispatch = useDispatch()
    const stateSetter = useStateSetter()
    const [file, setFile] = useState(null)
    const {name, model, filePresent} = useSelector(s => s.forms.newProject)
    const modelChange = val => dispatch(project.modelChanged(val))
    const nameChange = val => dispatch(project.projectNameChanged(val))
    const fileChange = e => {
        e ? dispatch(project.fileIsPresent()) : dispatch(project.fileIsAbsent())
        setFile(e.target.files[0])
    }
    
    //events
    const submitEvent = () => {

        const data = new FormData()
        data.append("attachment", file, file.name)
        data.append("name", name)
        data.append("model", model)
        dispatch()
    }

    //declarations
    const options = ["choice-model"]
    
    //render
    return <RedirectIfLoggedOut/> || <Form submit={submitEvent}>
        <Input name="name" type="text" onChange={stateSetter(nameChange)} value={name}/>
        <Input name="attachment" type="file" onChange={fileChange}/>
        <Input name="model" type="select" list={options} onChange={stateSetter(modelChange)} value={model}/>
        <SubmitBtn/>
    </Form>
}
export default NewProjectForm;