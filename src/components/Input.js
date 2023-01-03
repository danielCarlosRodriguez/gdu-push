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
                  className="form-control mb-3"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />

              </div>
       
    </div>
  );
};
