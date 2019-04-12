import React from 'react';
import { NavLink } from 'react-router-dom';

// app title, logo, nav and search bar. 
const Header = () => (

    <div className="mx-auto pt-5">
        <ul className="d-flex justify-content-around">
            <li className="nav-item pl-2 pr-2">
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li className="nav-item pl-2 pr-2">
                <NavLink exact to="/about">About</NavLink>
            </li>
            <li className="nav-item pl-2 pr-2">
                <NavLink exact to="/contact">Contact</NavLink>
            </li>
        </ul>
        <img className="logo" src={require('../camera.png')} alt="logo" />
        <h1 className="headerText"><b>Pictures for Everyone</b></h1>
    </div>
)

export default Header;