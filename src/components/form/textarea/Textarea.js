import React from 'react';
import './Textarea.scss';

const Textarea = ({
  id,
  name,
  placeholder,
  onChange,
  inputClass,
  isvalid,
  label,
  rows,
  columns,
}) => {
  return (
    <div className="form__group">
      <textarea
        id={id}
        className={inputClass.join(' ')}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        rows={rows}
        cols={columns}
        />
      <label htmlFor={id} className={`form__label`}>
        {label}
      </label>
    </div>  
  );
};

export default Textarea;
