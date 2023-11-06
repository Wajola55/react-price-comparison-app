import React from 'react';
import './Categories.css';
import home from '../images/home.png';
import ubrania from '../images/fashion.png';
import zwierzeta from '../images/paw.png';
import ogród from '../images/garden.png';
import uroda from '../images/beauty.png';
import dzieci from '../images/toys.png';


const Categories = ({ onSelectCategory }) => {
    const handleCategoryClick = (category) => {
        console.log('Category selected:', category);
        onSelectCategory(category);
    };

    return (
        <div className='categories'>
            <div className="category-item" onClick={() => handleCategoryClick('home')}>
                <b>Dom i Wnętrze</b>
                <img src={home} alt="home" />
            </div>
            <div className="category-item" onClick={() => handleCategoryClick('ubrania')}>
                <b>Odzież i Akcesoria</b>
                <img src={ubrania} alt="ubrania" />
            </div>
            <div className="category-item" onClick={() => handleCategoryClick('zwierzeta')}>
                <b>Zwierzęta</b>
                <img src={zwierzeta} alt="zwierzeta" />
            </div>
            <div className="category-item" onClick={() => handleCategoryClick('ogród')}>
                <b>Ogród i Patio</b>
                <img src={ogród} alt="ogród" />
            </div>
            <div className="category-item" onClick={() => handleCategoryClick('uroda')}>
                <b>Zdrowie i Uroda</b>
                <img src={uroda} alt="uroda" />
            </div>
            <div className="category-item" onClick={() => handleCategoryClick('dzieci')}>
                <b>Dla dzieci</b>
                <img src={dzieci} alt="dzieci" />
            </div>
        </div>
    );
};

export default Categories;
