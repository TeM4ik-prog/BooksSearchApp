import { Link } from "react-router-dom"
import "./header.scss"
export default function Header() {


    return (
        <header className="header">


            <Link to={'/'}>
                <img src="../icons/logo.svg" />
            </Link>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to={'/'} className="nav__link">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to={'about'} className="nav__link">About</Link>
                    </li>
                    <li className="nav__item">
                        <Link to={'contact'} className="nav__link">Contacts</Link>
                    </li>
                </ul>
            </nav>
            <button className="menu-button">
                <img src="../icons/nav.svg" className="nav-icon"/>
            </button>

        </header>
    )
}