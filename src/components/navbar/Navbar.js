import React from 'react';
import Search from '../form/search/Search';
import { Route, Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
      <Link to={{ pathname: `/` }} >
        MARVEL
      </Link>
      </div>
      <div className="navbar__search">
      <Route exact path="/" render={() =><Search onSearch={props.onSearch}/> } /> 
      </div>
      <div className="navbar__links"></div>
    </div>
  );
};

export default Navbar;