import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../../assets/images/not_found/oops-404-error-with-broken-robot-concept-illustration.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container flexSB notFound">
      <img src={NotFoundImg} alt="404 Not Found" />
      <p>Sorry, the page you requested could not be found.</p>
      <div className="container linkHolder">
        <i className="fa-solid fa-hand-point-right"></i>
        <Link to="/">Go back to Home Page</Link>
        <i className="fa-solid fa-hand-point-left"></i>
      </div>
    </div>
  );
};

export default NotFound;
