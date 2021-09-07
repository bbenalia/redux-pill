import React from "react";
import withLayout from "../../hoc/withLayout";

import SearchBar from "../../components/SearchBar";

function Home() {
  return (
    <div className="container">
      <div className="mt-5 row">
        <div className="col-6 pe-2">
          <h3 className="mb-4">Lorem fistrum a gramenawer caballo blanco</h3>
          <p>
            Sexuarl pupita no te digo trigo por no llamarte Rodrigor no te digo
            trigo por no llamarte Rodrigor tiene musho peligro a wan me cago en
            tus muelas.
          </p>
        </div>
        <div className="col-6">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default withLayout(Home);
