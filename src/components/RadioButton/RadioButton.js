import React from "react";

import "./RadioButton.scss";

export default function RadioButton({
  disabled = false,
  label = "Default checkbox",
  checked = false,
  handleClick = () => {},
  ...props
}) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        checked={checked}
        id="flexCheckDefault"
        disabled={disabled}
        onClick={handleClick}
        {...props}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {label}
      </label>
    </div>
  );
}
