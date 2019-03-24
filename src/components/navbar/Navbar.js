import React from 'react';
import Search from '../form/search/Search';
import { Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
      <Link to={{ pathname: `/` }} >
        <figure className="navbar__logo-figure">
          <img 
            src='../../assets/images/marvel-logo.png'
            alt='Marvel'
            className="navbar__logo-img"
          />
        </figure>
      </Link>
      </div>
      <div className="navbar__search">
        <Search onSearch={props.onSearch}/>
      </div>
      <div className="navbar__links"></div>
    </div>
  );
};

export default Navbar;