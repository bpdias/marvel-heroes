import React from "react";
import "./Input.scss";

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
  label
}) => {
  return (
    <div className="form__group">
      <label htmlFor={id} className={`form__label`}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={inputClass.join(" ")}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disable}
        maxLength={maxlength}
      />
    </div>
  );
};

export default Input;
