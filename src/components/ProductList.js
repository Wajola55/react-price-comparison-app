
import React from 'react';
import './ProductList.css';

function ProductList({ products }) {
    console.log(products);  // This will show the array of products.
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product-item">
                    <img src={product.images.default} alt={product.title} className="product-image"/>

                    <div className="product-details">
                        <span className="product-name">{product.title}</span>
                        <span className="product-shop">{product.offer}</span>
                        <span className="product-price">{product.price}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}




export default ProductList;
