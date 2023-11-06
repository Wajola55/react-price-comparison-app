import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import Categories from './Categories';

const ParentComponent = () => {
  const [products, setProducts] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(''); // Unused variable
  // const [searchQuery, setSearchQuery] = useState(''); // Unused variable

  const fetchProductsBySearch = (searchData) => {
    // Implementation
    setProducts(searchData);
  };

  const fetchProductsByCategory = (category) => {
    console.log("Fetch products for category:", category);
    // You should implement the logic to fetch products based on the category
    // For example, you might set the products state with the fetched data
  };

  const handleSearch = (searchData) => {
    // setSelectedCategory(''); // Comment out if you're not using it
    fetchProductsBySearch(searchData);
  };

  const handleSelectCategory = (category) => {
    // setSearchQuery(''); // Comment out if you're not using it
    // setSelectedCategory(category); // Comment out if you're not using it
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
