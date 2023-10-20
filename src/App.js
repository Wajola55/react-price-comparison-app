// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  const handleSearch = (query) => {
    const apiUrl = `http://localhost:5000/api/products?query=${query}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch(error => {
            console.error("There was an error fetching the products!", error);
        });
  };

  return (
    <div className="App">
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <ProductList products={products} />
    </div>
  );
}

export default App;

