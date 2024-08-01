import React from "react";
import { getPrice } from "../../../mock/data";

const PriceCard = () => {
  const prices = getPrice();

  return (
    <>
      <div className="container grid">
        {prices.map((price) => {
          return (
            <div className="items shadow" key={price.id}>
              <h4>{price.name}</h4>
              <h1>
                <span>$</span>
                {price.price}
              </h1>
              <p>{price.desc}</p>
              <button className="outline-btn">GET STARTED</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PriceCard;
