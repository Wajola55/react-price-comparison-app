// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Intro from './components/Intro';
import Categories from './components/Categories';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  const handleSearch = (data) => {
    setProducts(data);

  };

  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Intro />
      <SearchBar onSearch={handleSearch} />
      <ProductList products={products} />
    </div>
  );
}

export default App;

