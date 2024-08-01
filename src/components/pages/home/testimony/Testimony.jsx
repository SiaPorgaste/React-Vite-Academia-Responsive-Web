import React from "react";
import { getTestimony } from "../../../../mock/data";
import { getImageURL } from "../../../../utils/image-utils";
import Title from "../../../common/title/Title";
import "./Testimony.css";

const Testimony = () => {
  const testimonies = getTestimony();

  return (
    <>
      <section className="testimony padding">
        <div className="container">
          <Title
            subtitle="testimonies"
            subtitleClassName="capitalTxt"
            title="our successful students"
            titleClassName="headerTxt"
          />

          <div className="content grid2">
            {testimonies.map((testimony) => {
              return (
                <div className="items shadow">
                  <div className="box flex">
                    <div className="img">
                      <img
                        src={getImageURL("testo", testimony.cover)}
                        alt={testimony.cover}
                      />
                      <i className="fa fa-quote-left icon"></i>
                    </div>
                    <div className="name">
                      <h2>{testimony.name}</h2>
                      <span>{testimony.post}</span>
                    </div>
                  </div>
                  <p>{testimony.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimony;
