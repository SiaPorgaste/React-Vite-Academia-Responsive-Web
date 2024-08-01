import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCourseCard } from "../../../mock/data";
import { getImageURL } from "../../../utils/image-utils";
import RatingStars from "../../../utils/rate-utils";
import Pagination from "../../common/pagination/Pagination";
import Title from "../../common/title/Title";
import "./AllCourse.css";

const CourseCard = () => {
  const coursesCard = getCourseCard();
  const location = useLocation();
  const coursesRef = useRef(null);
  const prevLocationState = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = coursesCard.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPostsPerPage(2);
      } else {
        setPostsPerPage(3);
        setCurrentPage(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      }, 200);
    }
  }, [location.state]);

  return (
    <>
      <section className="courseCard">
        <Title
          subtitle="our courses"
          subtitleClassName="capitalTxt"
          title="explore our popular online courses"
          titleClassName="headerTxt"
        />
        <div className="container grid2">
          {currentPosts.map((course) => {
            return (
              <div className="items" key={course.id}>
                <div className="content flex">
                  <div className="left">
                    <div className="img">
                      <img
                        src={getImageURL("courses", course.cover)}
                        alt={course.coursesName}
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h1>{course.coursesName}</h1>
                    <RatingStars ratingString={course.rate} />
                    <div className="details">
                      {course.courTeacher.map((detail) => {
                        return (
                          <>
                            <div className="box">
                              <div className="dimg">
                                <img
                                  src={getImageURL(
                                    "courses/char",
                                    detail.dcover
                                  )}
                                  alt={detail.name}
                                />
                              </div>
                              <div className="para">
                                <h4>{detail.name}</h4>
                              </div>
                            </div>
                            <span>{detail.totalTime}</span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="price">
                  <h3>
                    {course.priceAll}/{course.pricePer}
                  </h3>
                </div>
                <button className="outline-btn" onClick="">
                  ENROLL NOW !
                </button>
              </div>
            );
          })}
        </div>
        <Pagination
          parentClassName="courseCard"
          totalPosts={coursesCard.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
};

export default CourseCard;
