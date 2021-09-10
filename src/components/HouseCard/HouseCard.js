import React from "react";

import "./HouseCard.scss";

function HouseCard({ home }) {
  return (
    <div className="col-6">
      <img
        className="pe-3 w-100 mb-1 custom-picture"
        src={home.image}
        alt={home.street + home.id}
      />
      <h6 className="text-dark pe-3">{home.city}</h6>
      <h6 className="text-warning pe-3">${home.price}</h6>
    </div>
  );
}

export default HouseCard;
