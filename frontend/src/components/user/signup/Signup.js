import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { signupUser } from '../../../store/auth';
import {formatForRequest, useStateSetter} from '../../../utilities/utilities'
import Form, {Input} from "../../form-components/Form";
import { RedirectIfLoggedIn} from '../../routes/Redirects';
import Btn, { SubmitBtn } from '../../buttons/buttons'

const Signup = () => {
    //hooks
    const dispatch = useDispatch()
    const stateSetter = useStateSetter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")

    //events
    const submitEvent = () => {
        const data = formatForRequest({
            required: {email, password, passwordConfirmation},
            optional: {firstName, lastName ,username}
        })
        if (data.ok) return dispatch(signupUser(data))
    }

    //render
    return RedirectIfLoggedIn() || <div className={"center-form"}><Form submit={submitEvent}>
        <h1 className="title">Please Sign Up</h1>
        <Input name={"firstName"} placeholder={"John"} onChange={stateSetter(setFirstName)} value={firstName}/>
        <Input name={"lastName"} placeholder={"Smith"} onChange={stateSetter(setLastName)} value={lastName}/>
        <Input name={"username"} placeholder={"johnsmith1234"} onChange={stateSetter(setUsername)} value={username}/>
        <Input name={"email"} type={"email"} placeholder={"email@email.com"} onChange={stateSetter(setEmail)} value={email}/>
        <Input name={"password"} type={"password"} onChange={stateSetter(setPassword)} value={password}/>
        <Input name={"passwordConfirmation"} type={"password"} onChange={stateSetter(setPasswordConfirmation)} value={passwordConfirmation}/>
        <SubmitBtn/>
    </Form>
    <Btn to="/login" classArr={["btn-flat"]}value="Back to Login"/>
    </div>
}
export default Signup;