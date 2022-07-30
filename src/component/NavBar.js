import React from "react";
import { Link } from "react-router-dom";
import "./css/Login.css"

export default function NavBar(){
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/images">Home</Link>
                        <Link className="nav-link" to="/">Recipe</Link>
                        <Link className="nav-link" to="/login">Login</Link>      
                    </li>
                </ul>
            </div>
        </nav>
    )
}