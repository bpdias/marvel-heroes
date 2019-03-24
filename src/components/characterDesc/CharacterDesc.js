import React from 'react';
import Spinner from '../../components/spinner';
import './CharacterDesc.scss';
import CharacterEdit from '../characterEdit';

const CharacterDesc = (props) => {
  const { character } = props;
  
  function onClick (e) {
    e.target.style.display='none';
    const edit = document.getElementById('edit__character');
    edit.style.display='block';
  }
  
  return (
    character ? 
      <div className='details__info'>
        <div className="details__info-text">
          <h3 id='charname'className="details__info-text--title">{character.results[0].name}</h3>
          <p id="chardesc" className="details__info-text--desc">{character.results[0].description}</p>
        </div>
        <CharacterEdit />
        <div className='details__info-edit-character'>
          <button 
            className='btn details__info-edit-character-btn'
            onClick={onClick}
          >

            Edit
          </button>
        </div>
      </div>
    : <Spinner/>
  );
};

export default CharacterDesc;