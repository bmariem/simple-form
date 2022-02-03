import React from "react";
const Input = ({ label, type, placeholder, value, className, setInput }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={className && className}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        required
      />
    </>
  );
};

export default Input;
