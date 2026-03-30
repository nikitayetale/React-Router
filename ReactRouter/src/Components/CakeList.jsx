import React from "react";
import cakes from "../data";

const CakeList = ({ cakes }) => {
    return (
        <div className="cake-list">
             {cakes.map((cake) => (
        <div key={cake.id} className="cake-card">
          <img src={cake.image} alt={cake.name} />
          <h3>{cake.name}</h3>
          <p>Rs {cake.price}</p>
        </div>
      ))}
    </div>
    );
};

export default CakeList;
