import React, { useState } from 'react';
import './ProductList.css';

import ProductDetailsModal from './ProductDetailsModal';

function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item" onClick={() => handleProductClick(product)}>
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

            {/* clickable direct link */}
            {product.direct_link && (
              <a href={product.direct_link} target="_blank" rel="noopener noreferrer" className="product-link">
                Zobacz produkt
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Display ProductDetailsModal */}
      {selectedProduct && <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}

export default ProductList;



