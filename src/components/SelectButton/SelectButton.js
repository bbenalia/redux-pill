import React from "react";
import cn from "clsx";

import "./Select-button.scss";

function SelectButton({
  children,
  handleClick = () => {},
  unselected = false,
  ...props
}) {
  const classes = cn({
    "btn m-1": true,
    "btn-primary": true,
    unselected: unselected,
  });

  return (
    <button type="button" className={classes} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

export default SelectButton;
