import React from 'react';
import { NavLink } from 'react-router-dom';

// app title, logo, nav and search bar. 
const Header = () => (

    <div>
        <h1><b>Welcome to this small image gallery app!</b></h1>
        {/* <ul className="nav justify-content-end">
            <li className="nav-item">
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/more">More</NavLink>
            </li>
        </ul> */}
    </div>

)

export default Header;