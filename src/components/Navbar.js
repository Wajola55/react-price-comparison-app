import React, { useState, useRef, useEffect } from 'react';
import Categories from './Categories';
import AuthForm from './AuthForm';
import FavoriteProductsModal from './FavoriteProductsModal';
import './Navbar.css';

function Navbar({ favoriteProducts, setFavoriteProducts }) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [notification, setNotification] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showFavoriteModal, setShowFavoriteModal] = useState(false);
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
    setShowFavoriteModal(false);
  };

  const handleSignUpClick = () => {
    closeForms();
    setShowSignUpForm(true);
  };

  const handleLoginClick = () => {
    closeForms();
    setShowLoginForm(true);
  };

  const handleAuthSubmit = (type, { username, password, repeatPassword, email }) => {
    if (type === 'signup') {
      if (password !== repeatPassword) {
        setNotification('Hasła nie pasują do siebie. Proszę spróbuj ponownie.');
        return;
      }
  
      // Save user credentials to local storage
      localStorage.setItem(username, JSON.stringify({ password, email }));
  
      setUsername(username);
      setRegistrationSuccess(true);
    } else if (type === 'login') {
      
      // Retrieve user data from local storage
      const userData = localStorage.getItem(username);
      const userDetails = userData && JSON.parse(userData);
  
      if (userDetails && userDetails.password === password) {
        setAuthenticated(true);
        setUsername(username);
        closeForms();
      } else {
        setNotification('Nieprawidłowy login lub hasło.');
      }
    }
  };
  
  const handleLogout = () => {
    setAuthenticated(false);
    setUsername('');
    closeForms();
  };

  const handleFavoritesClick = () => {
    setShowFavoriteModal(true);
  };

  const removeProduct = (productId) => {
    setFavoriteProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <h1>CENOMAT</h1>
        <div className="logo-image"></div>
      </div>

      <div>
        {authenticated ? (
          <div>
            <p className="welcome-message">Witaj, {username}!</p>
            <button onClick={handleLogout} className="sign-up-button">
              Wyloguj się
            </button>
            <button className="favorites-button" onClick={handleFavoritesClick}>
              Ulubione
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
          </div>
        )}

        {(showLoginForm || showSignUpForm) && (
          <AuthForm
            type={showLoginForm ? 'login' : 'signup'}
            onSubmit={(formData) => handleAuthSubmit(showLoginForm ? 'login' : 'signup', formData)}
            onClose={closeForms}
            notification={notification}
          />
        )}

        {registrationSuccess && (
          <div className="modal-overlay">
            <div className="modal registration-success">
              <p>Rejestracja przebiegła pomyślnie, witamy na pokładzie!</p>
              <img src="../img/welcome.gif" alt="Success Animation" />
              <button 
                className="form-button" 
                onClick={() => {
                  setRegistrationSuccess(false);
                  setAuthenticated(true);
                  closeForms();
                }}
              >
                OK
              </button>

            </div>
          </div>
        )}
      </div>

      {/* Display FavoriteProductsModal as a separate modal */}
      <FavoriteProductsModal
        favoriteProducts={favoriteProducts}
        show={showFavoriteModal}
        onClose={() => setShowFavoriteModal(false)}
        onRemoveProduct={removeProduct}
      />

      {!((showLoginForm || showSignUpForm || showFavoriteModal) && <Categories />)}
    </div>
  );
}

export default Navbar;

















