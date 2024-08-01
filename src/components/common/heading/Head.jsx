import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <Link to="/">
              <h1 className="capitalTxt">academia</h1>
              <span className="capitalTxt">online education & learning</span>
            </Link>
          </div>
          <div className="social">
            <a href="https://www.facebook.com" target="_blank">
              <i className="fa-brands fa-facebook-f icon"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <i className="fa-brands fa-instagram icon"></i>
            </a>
            <a href="https://www.x.com" target="_blank">
              <i className="fa-brands fa-x-twitter icon"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <i className="fa-brands fa-youtube icon"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Head;
