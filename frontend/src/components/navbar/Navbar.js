import "./Navbar.css"
import NavLinks from "./NavLinks"
import UserLinks from "./UserLinks"
export default function Navbar(){
    return <nav>
        <NavLinks/>
        <UserLinks/>
    </nav>
}