import "./Navbar.css"
import { NavLink } from 'react-router-dom'; 
import { resetForm } from '../../store/ui/home/CSVForm'
import { useDispatch, useSelector } from "react-redux"
export default function NavLinks(){
    const dispatch = useDispatch()
    const clickEvent = () => dispatch(resetForm())
    const isLoggedIn = useSelector(s => s.auth.token)
    return <div className={"row"}>
        <NavLink onClick={clickEvent} to="/">Home</NavLink>
        {isLoggedIn ? <NavLink to="/projects">Projects</NavLink> : null}
    </div>
}