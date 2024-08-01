import React from "react";
import { useNavigate } from "react-router-dom";

const HeroButton = () => {
  const navigate = useNavigate();

  const handleStarClick = () => {
    navigate("/pricing", { state: { elementClassName: "price" } });
  };

  const handleViewCourseClick = () => {
    navigate("/courses", { state: { elementClassName: "courseCard" } });
  };

  return (
    <div className="button">
      <button className="primary-btn capitalTxt" onClick={handleStarClick}>
        Get Started Now
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
      <button className="capitalTxt" onClick={handleViewCourseClick}>
        View Course
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

export default HeroButton;
