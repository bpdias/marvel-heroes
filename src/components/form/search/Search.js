import React from 'react';
import './Search.scss';

const Search = () => (
  <div className='search'>
    <input
      type='text'
      className='search__input'
      placeholder='Search Your Hero'
    />
    <button className='search__button'>
      <svg className='search__icon'>
        <use xlinkHref='../../../assets/images/svg/sprite.svg#magnifying-glass'/>
      </svg>
    </button>
  </div>
);

export default Search;

