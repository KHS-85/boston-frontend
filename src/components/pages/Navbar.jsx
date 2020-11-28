import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './navbar.css';

import {FaLock} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div id="Top" className="container-fluid mt-3">

            <nav className="navbar navbar-expand-lg navbar-light px-0">

                <div className="col-4">
                    <h2 className="logoarea"> <img src="/logo.png" className="logo" alt="logo"/> BOSTON GAMING</h2>
                </div>


                {/* Navbar collapse button */}
                <div className="pl-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                </button></div>

                {/* Collapses all links and searchbar */}
                <div className="collapse navbar-collapse pl-3" id="navbarSupportedContent">

                    {/* List of links on Navbar*/}

                    <ul className="navbar-nav py-2 mx-auto">
                        <li className="nav-item active navlist">
                            <HashLink smooth to="#Products" className="navbar_link" activeClassName="navbar_link--active">Products</HashLink>
                        </li>
                        <li className="nav-item navlist">
                            <HashLink smooth to="#DesignYourOwn" className="navbar_link" activeClassName="navbar_link--active">Design your own</HashLink>
                        </li>
                        <li className="nav-item navlist">
                            <HashLink smooth to="#About" className="navbar_link" activeClassName="navbar_link--active">About</HashLink>
                        </li>
                        <li className="nav-item navlist">
                            <HashLink smooth to="#Contact" className="navbar_link" activeClassName="navbar_link--active">Contact</HashLink>
                        </li>
                    </ul>

                    <button className="btn btn-outline-dark btn-sm"> <NavLink to="/Login" className="navbar_link" ><FaLock/> Login</NavLink></button>


                </div>

            </nav>

        </div>
    )
}

export default Navbar