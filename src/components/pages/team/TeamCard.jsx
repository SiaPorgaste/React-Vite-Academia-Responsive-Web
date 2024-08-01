import React, { lazy, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTeam } from "../../../mock/data";
import { getImageURL } from "../../../utils/image-utils";
import Pagination from "../../common/pagination/Pagination";

const TeamCard = () => {
  const team = getTeam();
  const location = useLocation();
  const coursesRef = useRef(null);
  const prevLocationState = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = team.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPostsPerPage(2);
      } else {
        setPostsPerPage(4);
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
      }, 1000);
    }
  }, [location.state]);

  return (
    <>
      <section className="team padding">
        <div className="container grid">
          {currentPosts.map((person) => {
            return (
              <div className="items shadow" key={person.id}>
                <div className="img">
                  <img
                    src={getImageURL("team", person.cover)}
                    alt={person.name}
                    loading={lazy}
                  />
                  <div className="overlay">
                    <i className="fa-brands fa-facebook-f icon">
                      <a href="https://www.facebook.com" target="_blank" />
                    </i>
                    <i className="fa-brands fa-instagram icon">
                      <a href="https://www.instagram.com" target="_blank" />
                    </i>
                    <i className="fa-brands fa-x-twitter icon">
                      <a href="https://www.x.com" target="_blank" />
                    </i>
                    <i className="fa-brands fa-tiktok icon">
                      <a href="https://www.tiktok.com" target="_blank" />
                    </i>
                  </div>
                  <div className="details">
                    <h2>{person.name}</h2>
                    <p>{person.work}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          parentClassName="team"
          totalPosts={team.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
};

export default TeamCard;
