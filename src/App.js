import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Intro from './components/Intro';
import Categories from './components/Categories';
import Footer from './components/Footer';
import FavoriteProductsModal from './components/FavoriteProductsModal';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    fetchInitialProducts();
  }, []);

  const fetchInitialProducts = () => {
    const requestBody = {
      page: 1,
      page_size: 30,
    };

    fetch('/publisher/products/', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
      console.log("Fetched initial products:", data.data);
      setProducts(data.data);
    })
    .catch(error => {
      console.error('Error fetching initial products:', error);
    });
  };

  const fetchProductsByCategory = (category) => {
    const requestBody = {
      filters: [
        { category: { lookup: "contains", value: category } }
      ],
      page: 1,
      page_size: 50,
    };
  
    fetch('/publisher/products/', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
      console.log("Fetched products for category:", category, data.data);
      setProducts(data.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  const handleSearch = (data) => {
    setProducts(data);
  };

  const handleFavoriteToggle = (product) => {
    const isFavorite = favoriteProducts.some((favProduct) => favProduct.id === product.id);

    if (isFavorite) {
      // Remove from favorites
      setFavoriteProducts(favoriteProducts.filter((favProduct) => favProduct.id !== product.id));
    } else {
      // Add to favorites
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };

  return (
    <div className="App">
      <Navbar favoriteProducts={favoriteProducts} setFavoriteProducts={setFavoriteProducts} />
      <Intro />
      <Categories onSelectCategory={fetchProductsByCategory} />
      <SearchBar onSearch={handleSearch} />
      <ProductList products={products} onFavoriteToggle={handleFavoriteToggle} />
      <Footer />
      {favoriteProducts.length > 0 && <FavoriteProductsModal favoriteProducts={favoriteProducts} onClose={() => setFavoriteProducts([])} />}
    </div>
  );
}

export default App;



