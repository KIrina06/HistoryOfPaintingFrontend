import './Navbar.css';
import { BsCartFill, BsFillHouseFill } from "react-icons/bs";

export function Navbar(){
    return (
        <ul>
            <li><a className="active" href="/paintings/"><BsFillHouseFill /></a></li>
            
            <li style={{float:"right"}}><a className="active" href="/request"><BsCartFill /></a></li>
            <li style={{float:"right"}}><a href="/login">Войти</a></li>
            <li style={{float:"right"}}><a href="/paintings/">Картины</a></li>
        </ul>
    )
}
