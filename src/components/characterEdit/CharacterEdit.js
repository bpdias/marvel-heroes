import React from 'react';
import './CharacterEdit.scss';
import Input from '../form/input';
import Textarea from '../form/textarea';

const CharactersEdit = () => {
  function onChangeInput(e) {
    const name = document.getElementById('charname')
    name.textContent = e.target.value
  } 
  
  function onChangeTextarea(e) {
    const desc = document.getElementById('chardesc')
    desc.textContent = e.target.value
  }

  function onClick(e) {
    e.preventDefault();
    console.log(e)
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

export default CharactersEdit;