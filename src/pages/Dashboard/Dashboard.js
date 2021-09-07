import React from "react";
import RadioButton from "../../components/RadioButton";
import SelectButton from "../../components/SelectButton";
import withLayout from "../../hoc/withLayout";

function Dashboard() {
  const toggleSelect = (event) => {
    event.target.classList.toggle("unselected");
  };

  return (
    <>
      <div className="container mt-5">
        <RadioButton />
      </div>
      <div className="container">
        <SelectButton unselected value={0} onClick={toggleSelect}>
          0 (studio flat)
        </SelectButton>
        <SelectButton unselected value={1} onClick={toggleSelect}>
          1
        </SelectButton>
        <SelectButton unselected value={2} onClick={toggleSelect}>
          2
        </SelectButton>
        <SelectButton unselected value={3} onClick={toggleSelect}>
          3
        </SelectButton>
        <SelectButton unselected value={4} onClick={toggleSelect}>
          4 or +
        </SelectButton>
      </div>
    </>
  );
}

export default withLayout(Dashboard);
