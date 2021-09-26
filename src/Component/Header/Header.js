import React from 'react';
import './Header.css'

const Header = () => {
    return (
        // This is the header part 
        <div>
            <header className="header-container">
                {/* showing header content */}
                <h1 className="heading">Select your favourite TV Series</h1>
                <p className="paragraph">A group of programs created or adapted for television broadcast with a common series title.</p>
                <h2>Total: $150 Million</h2>
            </header>
        </div>
    );
};

export default Header;