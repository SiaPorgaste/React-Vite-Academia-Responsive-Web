import React, { act, useEffect, useState } from "react";
import { getFaq } from "../../../mock/data";
import Title from "../../common/title/Title";

const Faq = () => {
  const faq = getFaq();
  const [click, setClick] = useState(false);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <>
      <section className="faq">
        <Title
          subtitle="FAQs"
          title="Frequently Ask Questions"
          titleClassName="headerTxt"
        />
        <div className="container">
          {faq.map((val, index) => (
            <div className="box">
              <button
                className="accordion"
                onClick={() => toggle(index)}
                key={index}
                style={{
                  boxShadow:
                    click === index
                      ? "none"
                      : "0 24px 36px -11px rgba(0 0 0/9%)",
                }}
              >
                <h2>{val.title}</h2>
                <span>
                  {click === index ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-right"></i>
                  )}
                </span>
              </button>
              {click === index ? (
                <div className="text">
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
