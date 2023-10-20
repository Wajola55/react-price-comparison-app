import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
            type="text"
            placeholder="Search for a product..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        </form>
    );

}

export default SearchBar;


