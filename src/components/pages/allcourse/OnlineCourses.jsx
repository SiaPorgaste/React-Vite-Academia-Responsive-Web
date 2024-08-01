import React, { useEffect, useState } from "react";
import { getOnline } from "../../../mock/data";
import { getImageURL } from "../../../utils/image-utils";
import Pagination from "../../common/pagination/Pagination";
import Title from "../../common/title/Title";
import "./AllCourse.css";

const OnlineCourses = () => {
  const online = getOnline();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = online.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPostsPerPage(2);
      } else {
        setPostsPerPage(6);
        setCurrentPage(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="online">
        <div className="container">
          <Title
            subtitle="courses"
            subtitleClassName="capitalTxt"
            title="browse our online Courses"
            titleClassName="headerTxt"
          />
          <div className="content grid3">
            {currentPosts.map((course) => {
              return (
                <div className="box" key={course.id}>
                  <div className="img">
                    <img
                      src={getImageURL("courses/online", course.cover)}
                      alt={course.courseName}
                    />
                    <img
                      src={getImageURL("courses/online", course.hoverCover)}
                      alt={course.courseName}
                      className="show"
                    />
                  </div>
                  <h1>{course.courseName}</h1>
                  <span>{course.course}</span>
                </div>
              );
            })}
          </div>
          <Pagination
            parentClassName="online"
            totalPosts={online.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
