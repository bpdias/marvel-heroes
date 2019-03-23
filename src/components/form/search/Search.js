import React from 'react'
import './Search.scss';


const Search = (props) => {
  const onChange = (e) => {
    const inputValue = e.target.value;
    props.onSearch(inputValue);
  }

  return (
    <div className='search'>
      <input
        id='search'
        type='text'
        className='search__input'
        placeholder='Search Your Hero'
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
