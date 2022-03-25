import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h2>Meal DB</h2>
            </div>
            <div className='nav-list'>
                <a href="/home">Home</a>
                <a href="/meals">Meals</a>
                <a href="/catergories">Categories</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;