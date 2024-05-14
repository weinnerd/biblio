import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/about-us">Quiénes somos</Link>
            <Link to="/message">Mensaje</Link>
            <Link to="/loans">Préstamo</Link>
        </div>
    );
}

export default Navbar;
