import React from 'react'


export const Input = ({ attribute, handleChange, param}) => {
  return (
    <div>
      <div className="">
        <input
          id={attribute.id}
          name={attribute.name}
          placeholder={attribute.placeholder}
          type={attribute.type}
          maxLength={attribute.maxLength}
          className={attribute.className}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
    </div>
  );
};
