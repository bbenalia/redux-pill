import React from "react";

import "./InputSelect.scss";

function buildSelectOptions(arrOption = ["element 1", "element 2"]) {
  return arrOption.map((element) => {
    return (
      <option key={element.id} value={element}>
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
  handleChange = () => {},
  handleBlur = () => {},
  ...props
}) {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    >
      <option selected>{defaultOption}</option>
      {buildSelectOptions(options)}
    </select>
  );
}

export default InputSelect;
