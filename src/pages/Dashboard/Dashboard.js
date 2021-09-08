import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../components/CheckBox";
import RangeSlider from "../../components/RangeSlider";
import withLayout from "../../hoc/withLayout";
import HouseListing from "../../components/HouseListing";

import SelectButton from "../../components/SelectButton";
import SearchBar from "../../components/SearchBar";
import InputSelect from "../../components/InputSelect";
import {
  fetchProducts,
  setFilteredProducts,
} from "../../redux/products/actions";
import { setHomeFilter, setPriceFilter } from "../../redux/filters/actions";

function Dashboard() {
  const { filters } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilteredProducts(filters));
  }, [dispatch, filters]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChangeHomeType = (event) => {
    const obj = { [event.target.name]: event.target.checked };
    dispatch(setHomeFilter(obj));
  };

  const handleChangePrice = (_event, minVal, maxVal) => {
    const obj = { min: minVal, max: maxVal };
    dispatch(setPriceFilter(obj));
  };

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
              <div className="row">
                <div className="col">
                  <CheckBox
                    id="flat"
                    name="flat/apartment"
                    label="Flat/Apartment"
                    checked={filters.type["flat/apartment"]}
                    handleChange={handleChangeHomeType}
                  />
                  <CheckBox
                    id="duplex"
                    name="duplex"
                    label="Duplex"
                    checked={filters.type.duplex}
                    handleChange={handleChangeHomeType}
                  />
                </div>
                <div className="col">
                  <CheckBox
                    id="house"
                    name="house"
                    label="House"
                    checked={filters.type.house}
                    handleChange={handleChangeHomeType}
                  />
                  <CheckBox
                    id="penthouse"
                    name="penthouse"
                    label="Penthouse"
                    checked={filters.type.penthouse}
                    handleChange={handleChangeHomeType}
                  />
                </div>
              </div>
            </div>

            <div className="col-3">
              <h6>Bedrooms</h6>
              <SelectButton
                unselected
                value={0}
                name="room1"
                onClick={toggleSelect}
              >
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
              <InputSelect
                defaultOption="Indifferent"
                options={["Option 1", "Option 2"]}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-3">
              <h6>Condition</h6>
              <div className="row">
                <div className="col">
                  <CheckBox id="new-homes" name="condition" label="New homes" />
                </div>
                <div className="col">
                  <CheckBox
                    id="good-condition"
                    name="condition"
                    label="Good condition"
                  />
                </div>
                <div className="col">
                  <CheckBox
                    id="needs-renovation"
                    name="condition"
                    label="Needs renovation"
                  />
                </div>
              </div>
            </div>

            <div className="col-3">
              <h6>Price Range</h6>
              <RangeSlider
                max={500000}
                min={0}
                handleChange={handleChangePrice}
              />
            </div>

            <div className="col-3">
              <h6>Publication Date</h6>
              <InputSelect
                defaultOption="Last 48 hours"
                options={["Option 1", "Option 2"]}
              />
            </div>

            <div className="col-3">
              <h6>More Filters</h6>
              <div className="row">
                <div className="col">
                  <CheckBox id="pets" name="more-filters" label="Pets" />
                </div>
                <div className="col">
                  <CheckBox id="lift" name="more-filters" label="Lift" />
                </div>
                <div className="col">
                  <CheckBox id="garden" name="more-filters" label="Garden" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <CheckBox
                    id="air-conditioning"
                    name="more-filters"
                    label="Air conditioning"
                  />
                </div>
                <div className="col">
                  <CheckBox id="terrace" name="more-filters" label="Terrace" />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <CheckBox
                    id="swimming-pool"
                    name="more-filters"
                    label="Swimming pool"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 shadow-sm rounded p-3">
          <HouseListing />
        </div>
      </div>
    </>
  );
}

export default withLayout(Dashboard);
