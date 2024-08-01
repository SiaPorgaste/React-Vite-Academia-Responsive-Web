import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div class="loader-container">
      <div class="fading-bars">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  );
};

export default Loader;
