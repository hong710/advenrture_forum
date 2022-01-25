import React from 'react';
import logo from '../assets/Adventure.svg';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a href="#" className="navbar-brand">
                <img src={logo} height="50" alt="CoolBrand"/>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link text-lightgreen">CONTRIBUTORS</a>
                    <a href="#" className="nav-item nav-link text-lightgreen">ABOUT</a>
                </div>
                <div className="navbar-nav ms-auto">
                    <a href="#" className="nav-item nav-link text-lightgreen">LOGIN</a>
                </div>
            </div>
        </div>
    </nav>
)}

export default Nav;
