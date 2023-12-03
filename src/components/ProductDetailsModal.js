import React from 'react';

import './ProductDetailsModal.css';

function ProductDetailsModal({ product, onClose }) {
  return (
    <div className="product-details-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Zamknij
        </button>
        <div className="product-details-container">
          <div className="product-image-container">
            <img src={product.images.default} alt={product.title} className="product-image" />
          </div>
          <div className="product-info-container">
            <h2 className="product-title">{product.title}</h2>
            {product.description ? (
              <div className="product-description-container">
                <p className="product-description">{product.description}</p>
              </div>
            ) : (
              <p className="product-no-description">Brak opisu produktu.</p>
            )}
            <div className="product-price-container">
              <span className="product-price">
                {product.sale_price && product.sale_price !== product.price ? (
                  <>
                    <s>{product.price}</s>
                    <strong>{product.sale_price}</strong>
                  </>
                ) : (
                  product.price
                )}
              </span>
            </div>
            <span className="product-brand">{product.brand}</span>
            {/* clickable direct link */}
            {product.direct_link && (
              <a href={product.direct_link} target="_blank" rel="noopener noreferrer" className="product-link">
                Zobacz produkt
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;


