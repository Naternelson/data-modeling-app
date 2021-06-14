import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from '../../../store/auth'
function Login() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(s => !!s.auth.token)
    function submitEvent(e){
        e.preventDefault()
        const [u, p] = e.target.querySelectorAll("input")  
        const [username, password] = [u.value, p.value]      
        dispatch(loginUser({username, password}))
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
            <div>{isLoggedIn ? "Hello World" : "goodbyeWorld"}</div>
        </form>
    </div>
}
export default Login;