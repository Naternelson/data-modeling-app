import "./Navbar.css"
import { NavLink } from 'react-router-dom'; 

export default function NavLinks(){
    return <div className={"row"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
    </div>
}