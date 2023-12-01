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
                <img src={home} alt="home" />
                <span className="category-name">Dom i Wnętrze</span>
            </div>
            <div className="category-item" onClick={() => handleCategoryClick('ubrania')}>
                <img src={ubrania} alt="ubrania" />
                <span className="category-name">Odzież</span>
            </div>
            <div className="category-item" onClick={() => handleCategoryClick('zwierzeta')}>
                <img src={zwierzeta} alt="zwierzeta" />
                <span className="category-name">Zwierzęta</span>
            </div>
            <div className="category-item" onClick={() => handleCategoryClick('ogród')}>
                <img src={ogród} alt="ogród" />
                <span className="category-name">Ogród i Patio</span>
            </div>
            <div className="category-item" onClick={() => handleCategoryClick('uroda')}>
                <img src={uroda} alt="uroda" />
                <span className="category-name">Zdrowie i Uroda</span>
            </div>
            <div className="category-item" onClick={() => handleCategoryClick('dzieci')}>
                <img src={dzieci} alt="dzieci" />
                <span className="category-name">Dla dzieci</span>

            
            </div>
        </div>
    );
};

export default Categories;
