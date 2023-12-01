import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <h1>CENOMAT</h1>
                <div className="logo-image"></div>
            </div>
            <button className="sign-up-button" onClick={handleSignUpClick}>Zaloguj się</button>
        </div>
    );
}

function handleSignUpClick() {
    console.log("Sign Up Clicked!");
}

export default Navbar;

