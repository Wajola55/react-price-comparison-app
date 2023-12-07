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

  const handleAuthSubmit = ({ username, password, repeatPassword, email }) => {
    console.log({ username, password, repeatPassword, email });

    if (password !== repeatPassword && repeatPassword !== undefined) {
      setNotification('Hasła nie pasują do siebie. Proszę spróbuj ponownie.');
      return;
    }

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

            <button className="favorites-button" onClick={handleFavoritesClick}>
              Ulubione
            </button>
          </div>
        )}

        {registrationSuccess && (
          <div className="modal-overlay">
            <div className="modal registration-success">
              <p>Rejestracja przebiegła pomyślnie, witamy na pokładzie!</p>
              <img src="../img/welcome.gif" alt="Success Animation" />
              <button className="form-button" onClick={() => setRegistrationSuccess(false)}>
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

















