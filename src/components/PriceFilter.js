import React from 'react';

function PriceFilter({ onFilterChange }) {
    return (
        <div className="price-filter">
            <h5>Filter by Price</h5>
            <input type="number" placeholder="Min Price" id="minPrice" />
            <input type="number" placeholder="Max Price" id="maxPrice" />
            <button onClick={onFilterChange}>Apply Filters</button>
        </div>
    );
}

export default PriceFilter;
