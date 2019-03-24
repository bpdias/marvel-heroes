import React from 'react';
import { withRouter } from 'react-router-dom';
import Spinner from '../../components/spinner';
import './CharacterDesc.scss';
import CharacterEdit from '../characterEdit';

const CharacterDesc = (props) => {
  const { character } = props;
  
  function getCharactes() {
    return JSON.parse(localStorage.getItem('editedCharacters'));
  }
  
  function displayCharacter() {
    const id = props.match.params.id;
    const characters = getCharactes();
    if (characters) {
      return characters[id] ? characters[id] : character.results[0];
    }
    return character.results[0];
  }

  function onClick (e) {
    e.target.style.display='none';
    const edit = document.getElementById('edit__character');
    edit.style.display='block';
  }
  
  return (
    character ? 
      <div className='details__info'>
        <div className="details__info-text">
          <h3 id='charname'className="details__info-text--title">{displayCharacter().name}</h3>
          <p id="chardesc" className="details__info-text--desc">{displayCharacter().description}</p>
        </div>
        <CharacterEdit character={props.character}/>
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

export default withRouter(CharacterDesc);