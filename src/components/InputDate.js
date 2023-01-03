import React from "react";

export const InputDate = ({ attribute, handleChange, param }) => {
  return (
    <div>
      <div className="">
        <input
          id={attribute.id}
          name={attribute.name}
          placeholder={attribute.placeholder}
          type={attribute.type}
          className="form-control mb-2"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
    </div>
  );
};
