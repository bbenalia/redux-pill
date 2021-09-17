import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import withLayout from "../../hoc/withLayout";
import SearchBar from "../../components/SearchBar";
import HouseCard from "../../components/HouseCard";
import { fetchProducts } from "../../redux/products/actions";
import { resetFilters } from "../../redux/filters/actions";

function Home() {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className="container mt-5 h-100 ">
      <div className="pt-3 pb-3 mb-3 row">
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
      <div className="pt-3 pb-3 mt-5 row">
        <h6>Popular listing</h6>
        <div className="col-6">
          <p className="mb-1">BUY</p>
          <div className="col-12 m-0 d-flex">
            {data.data?.map((house, index) => {
              if (index < 2) return <HouseCard key={house.id} home={house} />;
              return null;
            })}
          </div>
        </div>
        <div className="col-6 ">
          <p className="mb-1">RENT</p>
          <div className="col-12 m-0 d-flex">
            {data.data?.map((house, index) => {
              if (index >= 2 && index < 4)
                return <HouseCard key={house.id} home={house} />;
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(Home);
