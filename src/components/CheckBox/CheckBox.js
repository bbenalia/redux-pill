import React from "react";

import "./CheckBox.scss";

export default function CheckBox({
  id = "flexCheckDefault",
  name,
  value,
  disabled = false,
  filter,
  label = "Default checkbox",
  checked = false,
  handleChange = () => {},
  ...props
}) {
  function onHandleChange(event) {
    handleChange(event, filter);
  }

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
        onChange={onHandleChange}
        {...props}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
