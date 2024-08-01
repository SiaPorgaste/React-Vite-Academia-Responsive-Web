import React from "react";
import Title from "../../common/title/Title";
import AboutCard from "../about/AboutCard";
import BlogCard from "../blog/BlogCard";
import Courses from "./Courses";
import Hero from "./hero/Hero";
import "./Home.css";
import HPrice from "./HPrice";
import Testimony from "./testimony/Testimony";

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <AboutCard />
        <Courses />
        <Testimony />
        <Title
          title="recent from blog"
          titleClassName="capitalTxt"
          subtitle="our blog"
          subtitleClassName="headerTxt"
        />
        <BlogCard />
        <HPrice />
      </div>
    </>
  );
};

export default Home;
