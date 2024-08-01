import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Back from "../../common/back/Back";
import Faq from "./Faq";
import "./Price.css";
import PriceCard from "./PriceCard";

const Price = () => {
  const location = useLocation();
  const coursesRef = useRef(null);
  const prevLocationState = useRef(null);

  useEffect(() => {
    if (
      location.state &&
      location.state.elementClassName &&
      prevLocationState.current !== location.state
    ) {
      const { elementClassName } = location.state;
      coursesRef.current = document.querySelector(`.${elementClassName}`);
      prevLocationState.current = location.state;
    }

    if (coursesRef) {
      setTimeout(() => {
        // Set the 'scroll-behavior' property on the <body> element
        document.body.style.scrollBehavior = "smooth";
        coursesRef.current.scrollIntoView({ behavior: "smooth" });
        // Reset the 'scroll-behavior' property back to 'auto'
        document.body.style.scrollBehavior = "auto";
      }, 500);
    }
  }, [location.state]);

  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="price padding">
        <PriceCard />
        <Faq />
      </section>
    </>
  );
};

export default Price;
