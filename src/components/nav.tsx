import { NavLink } from "react-router-dom";

export default function Nav() {
    return(
        <nav className="w-full bg-red-300">
            <ul className="flex justify-around h-24 items-center">
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">Mes Compétences</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Me contacter</NavLink>
                </li>
            </ul>
        </nav>
    )
}