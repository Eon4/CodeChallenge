import { NavLink } from "react-router-dom"
import style from "./Navbar.module.scss";

export const Navbar = () => {

    const activeStyle = ({ isActive, isPending }) => {
        return {
            color: isActive ? "#DF9962" : "",

        }
    }

    return (
        <nav className={style.navbar} >
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products" style={activeStyle}>Products</NavLink>
                    <NavLink to="/about" style={activeStyle}>About</NavLink>
                    <NavLink to="/login" style={activeStyle}>Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}