import { Link } from "react-router-dom"
import "./header.scss"
function Header() {


    return (
        <header className="header">


            <div className="header__top">
                <Link to={"/"}>
                    <img src="icons/logo.svg" />
                </Link>

                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to={"/"} className="nav__link">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to={"about"} className="nav__link">About</Link>
                        </li>
                        <li className="nav__item">
                            <Link to={"contact"} className="nav__link">Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <Link to={"auth"} className="nav__link">Sign in / Sign up</Link>
                <button className="menu-button">
                    <img src="icons/nav.svg" className="nav-icon"/>
                </button>
            </div>

            <div className="header__heading">
                <h1 className="header__title">BookShelf</h1>
                <h2 className="header__subtitle">Find any book!</h2>
            </div>

        </header>
    )
}

export default Header