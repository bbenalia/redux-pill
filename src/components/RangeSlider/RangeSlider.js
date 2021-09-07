import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";

// import { withStyles } from "@material-ui/styles";

import "./RangeSlider.scss";

export default function RangeSlider({
  max = 4000,
  min = 0,
  handleChange = () => {},
  ...props
}) {
  const [sliderValue, setSliderValue] = useState([0, 100]);
  const [minValue, setMinValue] = useState([20, 80]);
  const [maxValue, setMaxValue] = useState([20, 80]);

  const handleChangeSlider = (_event, newValue) => {
    const minVal = (max / 100) * newValue[0];
    const maxVal = (max / 100) * newValue[1];

    setSliderValue(newValue);
    setMinValue(minVal);
    setMaxValue(maxVal);
    handleChange(_event, minVal, maxVal);
  };

  const handleChangeMinimum = (event) => {
    const targetValue = event.target.value;

    if (targetValue >= min && targetValue <= max) {
      setMinValue(targetValue);
      setSliderValue([(100 / max) * targetValue, sliderValue[1]]);

      handleChange(event, targetValue, maxValue);
    }
  };

  const handleChangeMaximum = (event) => {
    const targetValue = event.target.value;

    if (targetValue >= min && targetValue <= max) {
      setMaxValue(targetValue);
      setSliderValue([sliderValue[0], (100 / max) * targetValue]);

      handleChange(event, minValue, targetValue);
    }
  };

  // const CustomSlider = withStyles({
  //   root: {
  //     color: "#0d6efd",
  //     height: 8,
  //   },
  //   thumb: {
  //     height: 24,
  //     width: 24,
  //     backgroundColor: "#fff",
  //     border: "2px solid currentColor",
  //     marginTop: -8,
  //     marginLeft: -12,
  //     "&:focus, &:hover, &$active": {
  //       boxShadow: "inherit",
  //     },
  //   },
  //   active: {},
  //   valueLabel: {
  //     left: "calc(-50% + 4px)",
  //   },
  //   track: {
  //     height: 8,
  //     borderRadius: 4,
  //   },
  //   rail: {
  //     height: 8,
  //     borderRadius: 4,
  //     backgroundColor: "#adb5bd",
  //   },
  // })(Slider);

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3">
          <div className="col input-group ">
            <span className="input-group-text" id="basic-addon1">
              $
            </span>
            <input
              type="number"
              value={minValue}
              className="form-control"
              placeholder="0.00"
              aria-label="min-price"
              aria-describedby="basic-addon1"
              onChange={handleChangeMinimum}
            />
          </div>
          <span className="input-group-text bg-white border-0">-</span>
          <div className="col input-group ">
            <span className="input-group-text" id="basic-addon2">
              $
            </span>
            <input
              type="number"
              value={maxValue}
              className="form-control"
              placeholder="1000.00"
              aria-label="max-price"
              aria-describedby="basic-addon2"
              onChange={handleChangeMaximum}
            />
          </div>
        </div>
      </div>
      {/* <CustomSlider
        valueLabelDisplay="off"
        // aria-label="custom slider"
        defaultValue={[20, 80]}
        value={sliderValue}
        onChange={handleChangeSlider}
        {...props}
      /> */}
      <Slider
        valueLabelDisplay="off"
        // aria-label="custom slider"
        defaultValue={[20, 80]}
        value={sliderValue}
        onChange={handleChangeSlider}
        {...props}
      />
    </div>
  );
}
