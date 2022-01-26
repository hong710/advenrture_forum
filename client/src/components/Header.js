import React from 'react';
import Nav from './Nav';

function Header() {


    return (
        <header id="header-img" className="d-flex justify-content-center align-items-center">

            <div className="container ">
                <div className="" >
                    <h1 className="text-center">Your adventure starts here!</h1>
                    <p className="subheading text-center ">Handcrafted by adventure lovers</p>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <button className="btn btn-outline-lightgreen px-4 btn-sm px-5 py-2 ">READ MORE</button>
                </div>
            </div>
        </header>
    )}

export default Header;
