import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.input.id} className="form-label">
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className="form-control"
        aria-describedby="emailHelp"
      />
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
  );
});

export default Input;
