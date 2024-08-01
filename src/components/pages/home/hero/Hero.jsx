import React from "react";
import Title from "../../../common/title/Title";
import "./Hero.css";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              title="best online education expertise"
              titleClassName="headerTxt"
              subtitle="welcome to academia"
              subtitleClassName="capitalTxt"
            />
            <p>
              Academia covers higher education and scholarly pursuits. The best
              online education expertise offers flexible, accessible, and
              high-quality learning through digital platforms, empowering
              students of all backgrounds.
            </p>
            <HeroButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
