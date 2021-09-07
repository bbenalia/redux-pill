import React from "react";
import RadioButton from "../../components/RadioButton";
import withLayout from "../../hoc/withLayout";

function Dashboard() {
  return (
    <div className="container mt-5">
      <RadioButton />
    </div>
  );
}

export default withLayout(Dashboard);
