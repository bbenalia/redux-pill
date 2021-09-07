import React from "react";

import "./CheckBox.scss";

export default function CheckBox({
  disabled = false,
  label = "Default checkbox",
  checked = false,
  handleChange = () => {},
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
        onChange={handleChange}
        {...props}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {label}
      </label>
    </div>
  );
}
