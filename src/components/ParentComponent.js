import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import Categories from './Categories';

const ParentComponent = () => {
  const [products, setProducts] = useState([]);


  const fetchProductsBySearch = (searchData) => {
    setProducts(searchData);
  };

  const fetchProductsByCategory = (category) => {
    console.log("Fetch products for category:", category);
  };

  const handleSearch = (searchData) => {
    fetchProductsBySearch(searchData);
  };

  const handleSelectCategory = (category) => {
    fetchProductsByCategory(category);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Categories onSelectCategory={handleSelectCategory} />
      <ProductList products={products} />
    </div>
  );
};

export default ParentComponent;
