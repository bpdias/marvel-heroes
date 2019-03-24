import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className='header__hero'>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary__main">Marvel</span>
          <span className="heading-primary__sub">In Stan Lee Memory</span>
        </h1>
      </div>
    </div>
  </header>
)

export default Header;