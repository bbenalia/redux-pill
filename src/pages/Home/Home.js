import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import withLayout from "../../hoc/withLayout";
import SearchBar from "../../components/SearchBar";
import { resetFilters } from "../../redux/filters/actions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className="container mt-5 h-100">
      <div className="pt-3 pb-3 row">
        <div className="col-6 pe-4">
          <h3 className="mb-4 ">Lorem fistrum a gramenawer caballo blanco</h3>
          <p className="text-secondary">
            Sexuarl pupita no te digo trigo por no llamarte Rodrigor no te digo
            trigo por no llamarte Rodrigor tiene musho peligro a wan me cago en
            tus muelas.
          </p>
        </div>
        <div className="col-6">
          <SearchBar />
        </div>
      </div>
      <div className="pt-3 pb-3 row">
        <h6>Popular listing</h6>
        <div className="col-6">
          <p>BUY</p>
        </div>
        <div className="col-6 ">
          <p>RENT</p>
        </div>
      </div>
    </div>
  );
}

export default withLayout(Home);
