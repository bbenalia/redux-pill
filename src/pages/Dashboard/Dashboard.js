import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import useDebounce from "../../hooks/useDebounce";

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
import {
  setButtonsFilters,
  setCheckboxFilters,
  setPriceFilter,
  setSelectFilters,
} from "../../redux/filters/actions";

import { getFilterParams } from "../../helpers/filterParams";

function Dashboard() {
  const { filters } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const history = useHistory();
  const queryString = useQuery();
  const debouncedFilters = useDebounce(filters, 500);

  useEffect(() => {
    dispatch(setFilteredProducts(debouncedFilters));
    const query = getFilterParams(debouncedFilters);
    history.push(query);
  }, [dispatch, debouncedFilters, history]);

  useEffect(() => {
    const queryParam = queryString.toString().replace("%2F", "/");
    if (queryParam) history.push(`?${queryParam}`);
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleChangeCheckbox = (event, filterType) => {
    const obj = { [event.target.name]: event.target.checked };
    dispatch(setCheckboxFilters(obj, filterType));
  };

  const handleChangePrice = (_event, minVal, maxVal) => {
    const obj = { min: minVal, max: maxVal };
    dispatch(setPriceFilter(obj));
  };

  const handleChangeSelect = (value, filterType) => {
    // const obj = { min: minVal, max: maxVal };
    dispatch(setSelectFilters(value, filterType));
    // console.log(event, filterType);
  };

  const handleChangeButtons = (event) => {
    event.target.classList.toggle("unselected");
    const filterType = event.target.attributes.filter.value;
    const obj = { [event.target.value]: event.target.classList.length === 3 };
    dispatch(setButtonsFilters(obj, filterType));
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
                    filter="type"
                    checked={filters.type["flat/apartment"]}
                    handleChange={handleChangeCheckbox}
                  />
                  <CheckBox
                    id="duplex"
                    name="duplex"
                    label="Duplex"
                    filter="type"
                    checked={filters.type.duplex}
                    handleChange={handleChangeCheckbox}
                  />
                </div>
                <div className="col">
                  <CheckBox
                    id="house"
                    name="house"
                    label="House"
                    filter="type"
                    checked={filters.type.house}
                    handleChange={handleChangeCheckbox}
                  />
                  <CheckBox
                    id="penthouse"
                    name="penthouse"
                    label="Penthouse"
                    filter="type"
                    checked={filters.type.penthouse}
                    handleChange={handleChangeCheckbox}
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
                filter="room"
                onClick={handleChangeButtons}
              >
                0 (studio flat)
              </SelectButton>
              <SelectButton
                unselected
                value={1}
                filter="room"
                onClick={handleChangeButtons}
              >
                1
              </SelectButton>
              <SelectButton
                unselected
                value={2}
                filter="room"
                onClick={handleChangeButtons}
              >
                2
              </SelectButton>
              <SelectButton
                unselected
                value={3}
                filter="room"
                onClick={handleChangeButtons}
              >
                3
              </SelectButton>
              <SelectButton
                unselected
                value={4}
                filter="room"
                onClick={handleChangeButtons}
              >
                4 or +
              </SelectButton>
            </div>

            <div className="col-3">
              <h6>Bathrooms</h6>
              <SelectButton
                unselected
                value={1}
                filter="bath"
                onClick={handleChangeButtons}
              >
                1
              </SelectButton>
              <SelectButton
                unselected
                value={2}
                filter="bath"
                onClick={handleChangeButtons}
              >
                2
              </SelectButton>
              <SelectButton
                unselected
                value={3}
                filter="bath"
                onClick={handleChangeButtons}
              >
                3 or +
              </SelectButton>
            </div>

            <div className="col-3">
              <h6>Equipment</h6>
              <InputSelect
                defaultOption="Indifferent"
                options={["Furnished", "Unfurnished"]}
                filter="equipment"
                value={filters.equipment}
                handleChange={handleChangeSelect}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-3">
              <h6>Condition</h6>
              <div className="row">
                <div className="col">
                  <CheckBox
                    id="new-homes"
                    name="new"
                    label="New homes"
                    filter="condition"
                    checked={filters.condition.new}
                    handleChange={handleChangeCheckbox}
                  />
                </div>
                <div className="col">
                  <CheckBox
                    id="good-condition"
                    name="good"
                    label="Good condition"
                    filter="condition"
                    checked={filters.condition.good}
                    handleChange={handleChangeCheckbox}
                  />
                </div>
                <div className="col">
                  <CheckBox
                    id="needs-renovation"
                    name="renovation"
                    label="Needs renovation"
                    filter="condition"
                    checked={filters.condition.renovation}
                    handleChange={handleChangeCheckbox}
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
                defaultOption=""
                options={["Last 24 hours", "Last week"]}
                filter="publication_date"
                value={filters.publication_date}
                handleChange={handleChangeSelect}
              />
            </div>

            <div className="col-3">
              <h6>More Filters</h6>
              <div className="row">
                <div className="col">
                  <CheckBox
                    id="pets"
                    name="pet"
                    label="Pets"
                    filter="moreFilters"
                    checked={filters.moreFilters.pet}
                    handleChange={handleChangeCheckbox}
                  />
                </div>
                <div className="col">
                  <CheckBox
                    id="lift"
                    name="lift"
                    label="Lift"
                    filter="moreFilters"
                    checked={filters.moreFilters.lift}
                    handleChange={handleChangeCheckbox}
                  />
                </div>
                <div className="col">
                  <CheckBox
                    id="garden"
                    name="garden"
                    label="Garden"
                    filter="moreFilters"
                    checked={filters.moreFilters.garden}
                    handleChange={handleChangeCheckbox}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <CheckBox
                    id="air-conditioning"
                    name="air_conditioning"
                    label="Air conditioning"
                    filter="moreFilters"
                    checked={filters.moreFilters.air_conditioning}
                    handleChange={handleChangeCheckbox}
                  />
                </div>
                <div className="col">
                  <CheckBox
                    id="terrace"
                    name="terrace"
                    label="Terrace"
                    filter="moreFilters"
                    checked={filters.moreFilters.terrace}
                    handleChange={handleChangeCheckbox}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <CheckBox
                    id="swimming-pool"
                    name="swimming_pool"
                    label="Swimming pool"
                    filter="moreFilters"
                    checked={filters.moreFilters.swimming_pool}
                    handleChange={handleChangeCheckbox}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-5 shadow-sm rounded p-3">
          <HouseListing />
        </div>
      </div>
    </>
  );
}

export default withLayout(Dashboard);
