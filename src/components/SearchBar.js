import React, { useState } from 'react';
import './SearchBar.css';

const API_URL = '/publisher/products/';
const TOKEN = process.env.REACT_APP_API_TOKEN;

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const [sortOrder, setSortOrder] = useState('asc');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ordering parameter based on sortOrder
    const ordering = sortOrder === 'asc' ? 'price' : '-price';

    const requestBody = {
      filters: [
        { title: { lookup: "contains", value: query } },
        ...(priceFrom ? [{ price: { lookup: "gt", value: priceFrom } }] : []),
        ...(priceTo ? [{ price: { lookup: "lt", value: priceTo } }] : [])
      ],
      page: 1,
      page_size: 70,
      ordering: ordering
    };

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
      console.log("Fetched products:", data.data);
      onSearch(data.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Wpisz czego szukasz "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Sortuj według ceny (rosnąco)</option>
        <option value="desc">Sortuj według ceny (malejąco)</option>
      </select>
      <input 
        type="number" 
        placeholder="Cena od" 
        value={priceFrom}
        onChange={(e) => setPriceFrom(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Cena do" 
        value={priceTo}
        onChange={(e) => setPriceTo(e.target.value)}
      />
      <button type="submit">Szukaj</button>
    </form>
  );
  
}

export default SearchBar;





