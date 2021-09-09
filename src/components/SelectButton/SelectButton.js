import React from "react";
import cn from "clsx";

import "./Select-button.scss";

function SelectButton({
  children,
  checked = false,
  handleClick = () => {},
  ...props
}) {
  function OnHandleClick(event) {
    handleClick(event, !checked);
  }

  const classes = cn({
    "btn m-1": true,
    "btn-primary": true,
    unselected: !checked,
  });

  return (
    <button
      type="button"
      className={classes}
      onClick={OnHandleClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default SelectButton;
