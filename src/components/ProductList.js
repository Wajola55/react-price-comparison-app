import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ProductDetailsModal from './ProductDetailsModal';
import FavoriteProductsModal from './FavoriteProductsModal';

function ProductList({ products, favoriteProducts, onFavoriteToggle }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [localFavorites, setLocalFavorites] = useState([]);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);

  useEffect(() => {
    setLocalFavorites(favoriteProducts || []);
  }, [favoriteProducts]);

  const handleProductClick = (event, product) => {
    const isImageClick = event.target.classList.contains('product-image');

    if (isImageClick) {
      setSelectedProduct(product);
    }
  };

  const handleFavoriteToggle = (product) => {
    const isFavorite = localFavorites.some((favProduct) => favProduct.id === product.id);

    if (isFavorite) {
      setLocalFavorites((prevFavorites) => prevFavorites.filter((favProduct) => favProduct.id !== product.id));
    } else {
      setLocalFavorites((prevFavorites) => [...prevFavorites, product]);
    }

    // Notify the parent component about the toggle
    onFavoriteToggle(product);
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item" onClick={(event) => handleProductClick(event, product)}>
          <img src={product.images.default} alt={product.title} className="product-image" />

          <div className="product-details">
            <span className="product-name">{product.title}</span>
            <span className="product-shop">{product.offer}</span>
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
            <span className="product-brand">{product.brand}</span>

            {product.direct_link && (
              <a href={product.direct_link} target="_blank" rel="noopener noreferrer" className="product-link">
                Zobacz produkt
              </a>
            )}

            <div className="heart-icon" onClick={() => handleFavoriteToggle(product)}>
              {localFavorites.some((favProduct) => favProduct.id === product.id) ? (
                <i className="fas fa-heart" style={{ color: 'red' }}></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </div>
          </div>
        </div>
      ))}

      {showFavoritesModal && (
        <FavoriteProductsModal
          favoriteProducts={localFavorites}
          show={showFavoritesModal}
          onClose={() => setShowFavoritesModal(false)}
        />
      )}

      {selectedProduct && <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}

export default ProductList;











