import {useDispatch} from 'react-redux'
import * as actions from '../../../store/api'
function Login() {
    const dispatch = useDispatch()
    const submitEvent = (e) => {
        e.preventDefault()
        const [username, password] = e.target.querySelector("input")
        dispatch(actions.apiCallBegan({
            
        }))
    }
   return  <div>
        <form onSubmit={submitEvent}>
            <h1>Login with Username or Email</h1>
            <div>
                <label htmlFor={"username"}>Username</label>
                <input type={"text"} id={"username"} name={"username"}/>
            </div>
            <div>
                <label htmlFor={"password"}>Password</label>
                <input type={"password"} id={"password"} name={"password"}/>
            </div>
            <button className="btn-flat">Login</button>
        </form>
    </div>
}
export default Login;