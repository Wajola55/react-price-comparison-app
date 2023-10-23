// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  const handleSearch = (data) => {
    setProducts(data);

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

