import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { signupUser } from '../../../store/auth';
import {formatForRequest} from '../../../utilities/utilities'
import Form, {Input} from "../../form-components/Form";
import { RedirectIfLoggedIn} from '../../routes/Redirects';

const Signup = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const chg = stateSetter => e => stateSetter(e.target.value)
    const submitEvent = () => {
        const data = formatForRequest({
            required: {email, password, passwordConfirmation},
            optional: {firstName,lastName,username}
        })
        if (data) return dispatch(signupUser(data))
    }
    return RedirectIfLoggedIn() || <Form submit={submitEvent}>
        <Input name={"firstName"} placeholder={"John"} onChange={chg(setFirstName)} value={firstName}/>
        <Input name={"lastName"} placeholder={"Smith"} onChange={chg(setLastName)} value={lastName}/>
        <Input name={"username"} placeholder={"johnsmith1234"} onChange={chg(setUsername)} value={username}/>
        <Input name={"email"} type={"email"} placeholder={"email@email.com"} onChange={chg(setEmail)} value={email}/>
        <Input name={"password"} type={"password"} onChange={chg(setPassword)} value={password}/>
        <Input name={"passwordConfirmation"} type={"password"} onChange={chg(setPasswordConfirmation)} value={passwordConfirmation}/>
        <button type="submit" className={"btn-flat"}>Submit</button>
    </Form>
}
export default Signup;