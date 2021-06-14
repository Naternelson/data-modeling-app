import "./Navbar.css"
import { NavLink } from 'react-router-dom'; 
import { useSelector } from "react-redux"
export default function UserLinks(){
    const isLoggedIn = useSelector(s => s.auth.isLoggedIn)
    const loginDisplay = isLoggedIn ? "Logout" : "Login / Signup"
    return <div className={"row"}>
        <NavLink to="/login">{loginDisplay}</NavLink>
    </div>
}