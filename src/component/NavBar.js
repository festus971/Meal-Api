import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">HOME</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}