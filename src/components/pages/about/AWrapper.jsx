import React from "react";
import { getAWrapper } from "../../../mock/data";

const AWrapper = () => {
  const awrapper = getAWrapper();
  return (
    <>
      <section className="awrapper">
        <div className="container grid">
          {awrapper.map((val) => {
            return (
              <div className="box flex" key={val.id}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AWrapper;
