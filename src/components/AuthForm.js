import React, { useState } from 'react';

const AuthForm = ({ type, onSubmit, onClose, notification }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password, repeatPassword, email });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form className={type === 'login' ? 'login-form' : 'signup-form'} onSubmit={handleSubmit}>
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
            {type === 'signup' && (
              <>
                <div>
                  <label>
                    Powtórz hasło:
                    <input
                      type="password"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      className="form-input"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Email:
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                      required
                    />
                  </label>
                </div>
                {notification && (
                  <div className="error-message">
                    {notification}
                  </div>
                )}
              </>
            )}
          </div>
          <button type="submit" className="form-button">
            Gotowe
          </button>
        </form>
        <button className="close-button" onClick={onClose}>
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default AuthForm;

