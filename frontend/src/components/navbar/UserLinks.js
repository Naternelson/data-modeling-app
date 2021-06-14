import "./Navbar.css"
import { NavLink, useHistory } from 'react-router-dom'; 
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from '../../store/auth'
import { resetForm } from '../../store/ui/home/CSVForm'
export default function UserLinks(){
    const isLoggedIn = useSelector(s => !!s.auth.token)
    const loginDisplay = isLoggedIn ? "Logout" : "Login / Signup"
    const loginLink = isLoggedIn ? "/" : "/login"
    const history = useHistory()
    const dispatch = useDispatch()
    const clickEvent = (e) => {
        if(isLoggedIn){
            e.preventDefault()
            dispatch(logoutUser())
            dispatch(resetForm())
            history.push("/")
        }    
    }
    return <div className={"row"}>
        <NavLink onClick={ clickEvent} to={loginLink}>{loginDisplay}</NavLink>
    </div>
}