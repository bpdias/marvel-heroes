import React from 'react';
import Spinner from '../../components/spinner';
import './CharacterDesc.scss';

const CharacterDesc = (props) => {
  const { character } = props;
  
  return (
    character ? 
      <div className='details__info'>
        <div className="details__info-text">
          <h3 className="details__info-text--title">{character.results[0].name}</h3>
          <p className="details__info-text--desc">{character.results[0].description}</p>
        </div>

        <div className='details__info-edit-character'>
          <button className='btn details__info-edit-character-btn'>
            Edit
          </button>
        </div>
      </div>
    : <Spinner/>
  );
};

export default CharacterDesc;