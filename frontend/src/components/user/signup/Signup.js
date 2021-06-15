import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import {loginUser} from '../../../store/auth'
import Input from "../../form-components/Input";
function Signup() {
    // const dispatch = useDispatch()
    const submitEvent = () => {}
    const isLoggedIn = useSelector(s => !!s.auth.token)
    if (isLoggedIn) return <Redirect to="/"/>
   return  <div className={"signup-form"}>
        <form onSubmit={submitEvent}>
            <h1>Welcome! Please Signup</h1>
            <Input name={"firstName"} required={"true"}/>
        </form>
    </div>
}
export default Signup;