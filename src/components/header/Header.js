import React from 'react';
import Search from '../form/search/Search';
import './Header.scss';

const Header = (props) => (
  <header className="header">
    <div className="header__navbar">
    <div className="header__logo">
        <p>Logo</p>
      </div>
      <div className="header__search">
        <Search onSearch={props.onSearch}/>
      </div>
      <div className="header__links"></div>
    </div>

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