import React from 'react';
import './FavoriteProductsModal.css';

function FavoriteProductsModal({ favoriteProducts, show, onClose }) {
  const modalStyle = {
    display: show ? 'block' : 'none',
  };

  if (!show) {
    return null;
  }

  return (
    <div className="favorite-products-modal" style={modalStyle}>
      <div className="favorite-products-modal-content">
        <button className="favorite-products-close-button" onClick={onClose}>
          Zamknij
        </button>
        <div className="favorite-products-container">
          <div className="header-container">
            <img src="/img/heart.gif" alt="Loading Gif" className="loading-gif" />
            <h2>Twoje Ulubione Produkty</h2>
          </div>
          <ul>
            {favoriteProducts.map((product) => (
              <li key={product.id}>
                <div className="favorite-product-item">
                  {product.images && product.images.default && (
                    <img src={product.images.default} alt={product.title} className="favorite-product-image" />
                  )}
                  <div className="favorite-product-details">
                    <span className="favorite-product-name">{product.title}</span>
                    {product.direct_link && (
                      <a href={product.direct_link} target="_blank" rel="noopener noreferrer" className="favorite-product-link">
                        Zobacz produkt
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FavoriteProductsModal;




























