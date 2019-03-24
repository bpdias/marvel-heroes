import React from 'react';
import { withRouter } from 'react-router-dom';
import './CharacterEdit.scss';
import Input from '../form/input';
import Textarea from '../form/textarea';

const CharactersEdit = (props) => {
  function onChangeInput(e) {
    const name = getField().charname
    name.textContent = e.target.value
  } 
  
  function onChangeTextarea(e) {
    const desc = getField().chardesc;
    desc.textContent = e.target.value
  }

  function onClick(e) {
    e.preventDefault();
    save();
  }

  function getCharactes() {
    const localSavedCharacters = JSON.parse(localStorage.getItem('editedCharacters'));
    return localSavedCharacters;
  }

  function save() {
    const id = props.match.params.id;
    const name = getField().charname.textContent;
    const desc = getField().chardesc.textContent;
    const character = {
      id: id,
      name: name,
      description: desc,
    }
    let editedCharacters = getCharactes() || {};
    editedCharacters[id] = character;
    localStorage.setItem('editedCharacters', JSON.stringify(editedCharacters));
  }

  function getField() {
    return {
      charname: document.getElementById('charname'),
      chardesc: document.getElementById('chardesc'),
    }
  }
  return (
    <div id="edit__character" className="details__character-edit">
      <form className="form">
        <Input 
          type="text"
          name="name"
          inputClass={["form__input"]}
          placeholder="Edit Character Name"
          label="Edit Character Name"
          id="name"
          maxlength="40"
          onChange={onChangeInput}
        />
        <Textarea
          id="cdesc"
          name="cdesc"
          placeholder="Edit Character Description"
          onChange={onChangeTextarea}
          inputClass={["form__textarea"]}
          label="Edit Character Description" 
          rows="8"
          columns="10"
        />
        <div className='form__edit-character'>
          <button 
            className='btn'
            onClick={onClick}
          >

            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(CharactersEdit);