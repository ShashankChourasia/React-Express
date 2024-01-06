import React from "react";

const Input = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.input.id} className="form-label">
        {props.label}
      </label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
