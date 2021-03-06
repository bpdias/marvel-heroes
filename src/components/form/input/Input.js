import React from 'react';
import './Input.scss';

const Input = ({
  id,
  name,
  placeholder,
  value,
  type,
  onChange,
  disable,
  inputClass,
  maxlength,
  label,
}) => {
  
  return (
    <div className="form__group">
      <input
        id={id}
        type={type}
        className={inputClass.join(' ')}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disable}
        maxLength={maxlength}
        />
      <label htmlFor={id} className={`form__label`}>
        {label}
      </label>
    </div>  
  );
};

export default Input;
