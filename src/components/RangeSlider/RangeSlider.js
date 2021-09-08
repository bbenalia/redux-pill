import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";

import "./RangeSlider.scss";

export default function RangeSlider({
  max = 4000,
  min = 0,
  handleChange = () => {},
  ...props
}) {
  const [sliderValue, setSliderValue] = useState([0, 100]);
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

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
              placeholder={min}
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
              placeholder={`${max}`}
              aria-label="max-price"
              aria-describedby="basic-addon2"
              onChange={handleChangeMaximum}
            />
          </div>
        </div>
      </div>

      <Slider
        valueLabelDisplay="off"
        defaultValue={[20, 80]}
        value={sliderValue}
        onChange={handleChangeSlider}
        disableSwap
        sx={{
          color: "#0d6efd",
          "& .MuiSlider-rail": {
            backgroundColor: "#adb5bd",
          },
        }}
        {...props}
      />
    </div>
  );
}
