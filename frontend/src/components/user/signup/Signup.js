import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import {loginUser} from '../../../store/auth'
import Input from "../../form-components/Input";
function Signup() {
    // const dispatch = useDispatch()
    const submitEvent = (e) => {
        e.preventDefault()
    }
    const isLoggedIn = useSelector(s => !!s.auth.token)
    if (isLoggedIn) return <Redirect to="/"/>
   return  <div className={"signup-form"}>
        <form onSubmit={submitEvent}>
            <h1>Welcome! Please Signup</h1>
            <Input name={"firstName"}/>
            <Input name={"lastName"}/>
            <Input name={"username"}/>
            <Input name={"email"} type={"email"}/>
            <Input name={"password"} type={"password"}/>
            <Input name={"passwordConfirmation"} type={"password"}/>
            <button type="submit" className={"btn-flat"}>Submit</button>
        </form>
    </div>
}
export default Signup;