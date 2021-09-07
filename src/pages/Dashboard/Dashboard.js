// import React, { useState } from "react";
import React from "react";
import CheckBox from "../../components/CheckBox";
import RangeSlider from "../../components/RangeSlider";
import withLayout from "../../hoc/withLayout";

// import RadioButton from "../../components/RadioButton";
import SelectButton from "../../components/SelectButton";
import SearchBar from "../../components/SearchBar";

// function Dashboard() {
// const [state, setState] = useState([0, 100]);

// const handleChange = (event, minVal, maxVal) => {
//   // setState(newValue);
// };

// return (
//   <div className="container mt-5">
//     <CheckBox />
//     <RangeSlider max={4000} min={0} />
//   </div>

function Dashboard() {
  const toggleSelect = (event) => {
    event.target.classList.toggle("unselected");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <SearchBar />
          </div>
          <div className="col text-end align-items-center">
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="32"
              height="32"
              className="rounded-circle d-inline"
            />
            <h6 className="d-inline ms-2">username</h6>
          </div>
        </div>
        <div className="container mt-5 shadow-sm rounded p-3">
          <div className="row">
            <div className="col-3">
              <h6>Type of home</h6>
              <CheckBox />
            </div>
            <div className="col-3">
              <h6>Bedrooms</h6>
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
            <div className="col-3">
              <h6>Bathrooms</h6>
              <SelectButton unselected value={1} onClick={toggleSelect}>
                1
              </SelectButton>
              <SelectButton unselected value={2} onClick={toggleSelect}>
                2
              </SelectButton>
              <SelectButton unselected value={3} onClick={toggleSelect}>
                3 or +
              </SelectButton>
            </div>
            <div className="col-3">
              <h6>Equipment</h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3">
              <h6>Condition</h6>
            </div>
            <div className="col-3">
              <h6>Price Range</h6>
              <RangeSlider max={4000} min={0} />
            </div>
            <div className="col-3">
              <h6>Publication Date</h6>
            </div>
            <div className="col-3">
              <h6>More Filters</h6>
            </div>
          </div>
        </div>

        <div className="container mt-5 shadow-sm rounded p-3">Image</div>
      </div>
    </>
  );
}

export default withLayout(Dashboard);
