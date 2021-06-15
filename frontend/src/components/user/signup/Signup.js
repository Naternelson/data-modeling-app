import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from '../../../store/auth'
import Form, {Input} from "../../form-components/Form";
import { RedirectIfLoggedOut, LoggedOff } from '../../routes/Redirects';
// function Signup() {
//     // const dispatch = useDispatch()
//     const submitEvent = (e) => {
//         e.preventDefault()
//     }
//     
//     
//    return  <div className={"signup-form"}>
//         <form onSubmit={submitEvent}>
//             <h1>Welcome! Please Signup</h1>
//             <Input name={"firstName"}/>
//             <Input name={"lastName"}/>
//             <Input name={"username"}/>
//             <Input name={"email"} type={"email"}/>
//             <Input name={"password"} type={"password"}/>
//             <Input name={"passwordConfirmation"} type={"password"}/>
//             <button type="submit" className={"btn-flat"}>Submit</button>
//         </form>
//     </div>
// }
const Signup = () => {
    if(LoggedOff) return RedirectIfLoggedOut()
    return <Form>
        <Input name="firstName"/>
        <Input name={"lastName"}/>
        <Input name={"username"}/>
        <Input name={"email"} type={"email"}/>
        <Input name={"password"} type={"password"}/>
        <Input name={"passwordConfirmation"} type={"password"}/>
        <button type="submit" className={"btn-flat"}>Submit</button>
    </Form>
}
export default Signup;