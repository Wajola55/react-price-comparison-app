import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
<<<<<<< HEAD
            <div className="logo-container">
                <h1>CENOMAT</h1>
                <div className="logo-image"></div>
            </div>
            <button className="sign-up-button" onClick={handleSignUpClick}>Sign Up</button>
        </div>
    );
=======
            <h1>CENOMAT</h1>
            <button className="sign-up-button" onClick={handleSignUpClick}>Sign Up</button>
        </div>
    )
>>>>>>> 01b5673fdfa8c9a1333969ca3a5bc3c575857a73
}

function handleSignUpClick() {
    console.log("Sign Up Clicked!");
}

export default Navbar;
<<<<<<< HEAD


=======
>>>>>>> 01b5673fdfa8c9a1333969ca3a5bc3c575857a73
