import React from 'react'
import './Categories.css';
import home from '../images/home.png';
import fashion from '../images/fashion.png';
import fitness from '../images/fitness.png';
import garden from '../images/garden.png';
import beauty from '../images/beauty.png';
import phone from '../images/phone.png';


const Categories = () => {
    return (
        <div className='categories'>
            <p className="category-item"><b>Dom i Wnętrze</b></p>
            <img className="category-item" src={home} alt="home" />
            <p className="category-item"><b>Ogród i Patio</b></p>
            <img className="category-item" src={garden} alt="garden" />
            <p className="category-item"><b>Odzież i Akcesoria</b></p>
            <img className="category-item" src={fashion} alt="fasion"/>
            <p className="category-item"><b>Zdrowie i Uroda</b></p>
            <img className="category-item" src={beauty} alt="beauty"/>
            <p className="category-item"><b>Sport i Rekreacja</b></p>
            <img className="category-item" src={fitness} alt="fitness"/>
            <p className="category-item"><b>Telefony i Gadżety</b></p>
            <img className="category-item" src={phone} alt="phone"/>
        </div>
    )
}

export default Categories;