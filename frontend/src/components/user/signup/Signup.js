import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from '../../../store/auth'
import {formatForRequest} from '../../../utilities/utilities'
import Form, {Input} from "../../form-components/Form";
import { RedirectIfLoggedIn} from '../../routes/Redirects';

const Signup = () => {
    const submitEvent = form => {
        const data = formatForRequest({
            required: {
                
            }
        })
    }

    return RedirectIfLoggedIn() || <Form>
        <Input name={"firstName"} placeholder={"John"}/>
        <Input name={"lastName"} placeholder={"Smith"}/>
        <Input name={"username"} placeholder={"johnsmith1234"}/>
        <Input name={"email"} type={"email"} placeholder={"email@email.com"}/>
        <Input name={"password"} type={"password"}/>
        <Input name={"passwordConfirmation"} type={"password"}/>
        <button type="submit" className={"btn-flat"}>Submit</button>
    </Form>
}
export default Signup;