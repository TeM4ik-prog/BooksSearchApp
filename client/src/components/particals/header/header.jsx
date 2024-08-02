import { Link } from "react-router-dom"
import "./header.scss"
export default function Header() {


    return (
        <div className="header-container">


            <Link to={'/'}>
                <img src="icons/logo.svg" />
            </Link>

            <div className="nav-container">
                <div className="nav-items">
                    <p>home</p>
                    <p>about</p>
                    <p>contacts</p>
                </div>
                <img src="icons/nav.svg" className="nav-icon"/>
            </div>


        </div>
    )
}