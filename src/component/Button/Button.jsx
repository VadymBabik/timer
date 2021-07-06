import React from "react";
const Button = ({ text, onClick, refBtn }) => (
  <button
    ref={refBtn}
    onClick={onClick}
    className="btn waves-effect waves-light"
  >
    {text}
  </button>
);
export default Button;
