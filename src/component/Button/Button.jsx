import React from "react";
const Button = ({ text, onClick, refBtn }) => (
  <button
    ref={refBtn}
    onClick={onClick}
    className="btn light-blue darken-1 waves-effect waves-light btn-large"
  >
    {text}
  </button>
);
export default Button;
