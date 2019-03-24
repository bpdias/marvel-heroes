import React from 'react';
import './CharacterEdit.scss';
import Input from '../form/input';
import Textarea from '../form/textarea';

const CharactersEdit = () => {
  const onChange = () => {

  };
  
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
        />
        <Textarea
          id="cdesc"
          name="cdesc"
          placeholder="Edit Character Description"
          onChange={onChange}
          inputClass={["form__textarea"]}
          label="Edit Character Description" 
          rows="8"
          columns="10"
        />
      </form>
    </div>
  );
};

export default CharactersEdit;