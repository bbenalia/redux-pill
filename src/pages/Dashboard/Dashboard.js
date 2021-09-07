import React from "react";
import CheckBox from "../../components/CheckBox";
import withLayout from "../../hoc/withLayout";

function Dashboard() {
  return (
    <div className="container mt-5">
      <CheckBox />
    </div>
  );
}

export default withLayout(Dashboard);
