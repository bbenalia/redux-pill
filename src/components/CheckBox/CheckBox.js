import React from "react";

import "./CheckBox.scss";

export default function CheckBox({
  id = "flexCheckDefault",
  name,
  value,
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
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
