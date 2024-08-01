import React from "react";
import { getPrice } from "../../../mock/data";
import Title from "../../common/title/Title";
import "./Home.css";

const HPrice = () => {
  const prices = getPrice();

  return (
    <>
      <section className="price padding">
        <Title
          title="pricing & packages"
          titleClassName="capitalTxt"
          subtitle="our pricing"
          subtitleClassName="headerTxt"
        />
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
      </section>
    </>
  );
};

export default HPrice;
