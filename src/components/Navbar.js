import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h1>CENOMAT</h1>
            <button className="sign-up-button" onClick={handleSignUpClick}>Sign Up</button>
        </div>
    )
}

function handleSignUpClick() {
    console.log("Sign Up Clicked!");
}

export default Navbar;
