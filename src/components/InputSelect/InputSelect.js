import React from "react";

import "./InputSelect.scss";

function buildSelectOptions(arrOption = ["element 1", "element 2"]) {
  return arrOption.map((element) => {
    return (
      <option key={element} value={element}>
        {element}
      </option>
    );
  });
}

function InputSelect({
  id = "input-01",
  value = "",
  name = "",
  options,
  defaultOption,
  filter,
  handleChange = () => {},
  handleBlur = () => {},
  ...props
}) {
  function onHandleChange(event) {
    handleChange(event.target.value, filter);
  }

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      id={id}
      name={name}
      value={value}
      onChange={onHandleChange}
      onBlur={handleBlur}
      {...props}
    >
      <option defaultValue>{defaultOption}</option>
      {buildSelectOptions(options)}
    </select>
  );
}

export default InputSelect;
