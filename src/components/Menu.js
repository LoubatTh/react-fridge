import { NavLink } from "react-router-dom"

export default function Menu() {
    return(
        <div className="menu">
            <ul>
                <li><NavLink to="/" className={({ isActive}) => (isActive ? "activeLink" : undefined)}>Frigo</NavLink></li>
                <li><NavLink to="/add" className={({ isActive}) => (isActive ? "activeLink" : undefined)}>Ajout d'aliments</NavLink></li>
            </ul>
        </div>
    )
}