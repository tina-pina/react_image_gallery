import React from 'react';
import About from './About';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';

// app title, logo, nav and search bar. 
const Header = () => (

    <div className="col-4 mx-auto pt-5">
        <ul className="d-flex justify-content-between">
            <li className="nav-item">
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/contact">Contact</NavLink>
            </li>
        </ul>
        <img className="logo" src={require('../camera.png')} />
        <h1 className="headerText"><b>Pictures for Everyone</b></h1>
    </div>
)

export default Header;