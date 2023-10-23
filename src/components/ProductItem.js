import React from 'react';
import './ProductItem.css';

function ProductItem ({ product }) {
    return (
        <div className="product-item">
            <img src={product.images.default} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Shop: {product.offer}</p>
            <p>Price: {product.price}</p>
        </div>
    );
}




export default ProductItem;
