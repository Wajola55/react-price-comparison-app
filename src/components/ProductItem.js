import React from 'react';
import './ProductItem.css';

function ProductItem ({ product }) {
    return (
        <div className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Shop: {product.shop}</p>
            <p>Price: {product.price}</p>
        </div>
    );
}

export default ProductItem;
