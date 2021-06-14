import "./Navbar.css"
import { NavLink } from 'react-router-dom'; 
import { resetForm } from '../../store/ui/home/CSVForm'
import { useDispatch } from "react-redux"
export default function NavLinks(){
    const dispatch = useDispatch()
    const clickEvent = () => {
        dispatch(resetForm())
    }
    return <div className={"row"}>
        <NavLink onClick={clickEvent} to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
    </div>
}