import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUpClick = () => {
        setShowLoginForm(false);
        setShowSignUpForm(!showSignUpForm);
    };

    const handleLoginClick = () => {
        setShowSignUpForm(false);
        setShowLoginForm(!showLoginForm);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        
        const isValidUser = checkCredentials(username, password);

        if (isValidUser) {
            console.log(`Logging in with username: ${username}`);
            setAuthenticated(true);
            setUsername(username);
            setPassword('');
            setShowLoginForm(false);
            setShowSignUpForm(false);
        } else {
            console.error('Invalid username or password. Please try again.');
        }
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

       
        console.log(`Registering with username: ${username}`);
       
        setAuthenticated(true);
        setUsername(username);
        setPassword('');
        setShowSignUpForm(false);
        setShowLoginForm(true);
    };

    const handleLogout = () => {
        setAuthenticated(false);
        setShowLoginForm(true);
    };

    const checkCredentials = (enteredUsername, enteredPassword) => {
        return true;
    };

    return (
        <div className="navbar">
            <div className="logo-container">
                <h1>CENOMAT</h1>
                <div className="logo-image"></div>
            </div>

            {authenticated ? (
                <div>
                    <p className="welcome-message">Welcome, {username}!</p>
                    <button onClick={handleLogout} className="sign-up-button">
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <button className="sign-up-button" onClick={handleSignUpClick}>
                        Zarejestruj się
                    </button>
                    <button className="sign-up-button" onClick={handleLoginClick}>
                        Zaloguj się
                    </button>

                    {(showLoginForm || showSignUpForm) && (
                        <form
                            className={showLoginForm ? 'login-form' : 'signup-form'}
                            onSubmit={showLoginForm ? handleLoginSubmit : handleSignUpSubmit}
                        >
                            <div className="form-container">
                                <div>
                                    <label>
                                        Login:
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="form-input"
                                            required
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Hasło:
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-input"
                                            required
                                        />
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="form-button">
                                {showLoginForm ? 'Gotowe' : 'Gotowe'}
                            </button>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
}

export default Navbar;
