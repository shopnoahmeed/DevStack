import React from 'react';
import logo from '../assets/logo-text.png'
const Navbar = () => {
    return (
        <nav>
            <div className="w-60">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;