import React, { useState, useRef, useEffect } from 'react';
import Categories from './Categories';
import AuthForm from './AuthForm';
import './Navbar.css';

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [notification, setNotification] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        closeForms();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeForms = () => {
    setShowLoginForm(false);
    setShowSignUpForm(false);
    setNotification(null);
    setRegistrationSuccess(false);
  };

  const handleSignUpClick = () => {
    closeForms();
    setShowSignUpForm(true);
  };

  const handleLoginClick = () => {
    closeForms();
    setShowLoginForm(true);
  };

  const handleAuthSubmit = ({ username, password, repeatPassword, email }) => {

    console.log({ username, password, repeatPassword, email });

    // Check if passwords match
    if (password !== repeatPassword && repeatPassword !== undefined) {
      setNotification('Passwords do not match. Please try again.');
      return;
    }

    // Set registration success
    if (username && password && email) {
      setAuthenticated(true);
      setUsername(username);
      closeForms();
      setRegistrationSuccess(true);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    closeForms();
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <h1>CENOMAT</h1>
        <div className="logo-image"></div>
      </div>

      {authenticated ? (
        <div>
          <p className="welcome-message">Witaj, {username}!</p>
          <button onClick={handleLogout} className="sign-up-button">
            Wyloguj się
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
            <>
              <AuthForm
                type={showLoginForm ? 'login' : 'signup'}
                onSubmit={handleAuthSubmit}
                onClose={closeForms}
                notification={notification}
              />
            </>
          )}
        </div>
      )}

{registrationSuccess && (
    <div className="modal-overlay">
        <div className="modal registration-success">
            <p>Rejestracja przebiegła pomyślnie, witamy na pokładzie!</p>
            <button className="form-button" onClick={() => setRegistrationSuccess(false)}>
                OK
            </button>
        </div>
    </div>
)}


    
      {!((showLoginForm || showSignUpForm) && <Categories />)}
    </div>
  );
}

export default Navbar;











