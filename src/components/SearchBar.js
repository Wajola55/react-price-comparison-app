import React, { useState } from 'react';
import './SearchBar.css';

const API_URL = '/publisher/products/';

const TOKEN = 'EapZX8C2hhjiF4JkP5LiJBA0ARMxui';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const requestBody = {
            filters: [
                { title: { lookup: "contains", value: query } }
            ],
            page: 1,
            page_size: 50
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
            const products = data.data;
            products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            onSearch(products);
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        });
    };
    

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Znajdź produkt lub sklep..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Szukaj</button>
        </form>
    );
}

export default SearchBar;




