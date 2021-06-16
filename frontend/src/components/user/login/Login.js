import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { RedirectIfLoggedIn} from '../../routes/Redirects';
import {loginUser} from '../../../store/auth'
import {formatForRequest, useStateSetter} from '../../../utilities/utilities'
import Form, {Input} from "../../form-components/Form";

const Login = () => {
    //hooks
    const dispatch = useDispatch()
    const stateSetter = useStateSetter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    //events
    const  submitEvent = () => {    
        dispatch(loginUser(formatForRequest({required:{username, password}})))
    }

    //render
    return RedirectIfLoggedIn() || <>
    <Form submit={submitEvent}>
        <h1 className="title">Login with Username or Email</h1>
        <Input name={"username"} onChange={stateSetter(setUsername)}/>
        <Input name={"password"} onChange={stateSetter(setPassword)}/>
    </Form>
    </>
}

export default Login;