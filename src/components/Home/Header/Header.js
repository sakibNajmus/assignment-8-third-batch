import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="head-logo">
                <h3>React Router</h3>
            </div>

            <div className="head-menu">
                <a href="/home">Home</a>
                <a href="/home">About</a>
                <a href="/home">Public</a>
                <a href="/home">Teams</a>
            </div>
        </div>
    );
};

export default Header;