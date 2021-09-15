import React from "react";

function ButtonRemove({ children, handleRemove, id }) {
  function onHandleRemove() {
    handleRemove(id);
  }

  return (
    <button type="button" className="btn" onClick={onHandleRemove} id={id}>
      {children}
    </button>
  );
}

export default ButtonRemove;
