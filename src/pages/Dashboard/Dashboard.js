// import React, { useState } from "react";
import React from "react";
import CheckBox from "../../components/CheckBox";
import RangeSlider from "../../components/RangeSlider";
import withLayout from "../../hoc/withLayout";

function Dashboard() {
  // const [state, setState] = useState([0, 100]);

  // const handleChange = (event, minVal, maxVal) => {
  //   // setState(newValue);
  // };

  return (
    <div className="container mt-5">
      <CheckBox />
      <RangeSlider max={4000} min={0} />
    </div>
  );
}

export default withLayout(Dashboard);
