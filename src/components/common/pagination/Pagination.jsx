import React, { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = ({
  parentClassName,
  totalPosts,
  postsPerPage,
  setCurrentPage,
}) => {
  const pages = [];
  const [activePage, setActivePage] = useState("page-btn-1");

  const handlePageBtnClick = (pageId, page) => {
    setCurrentPage(page);
    setActivePage(pageId);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setActivePage("page-btn-1");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const pageBtns = document.querySelectorAll(`.${parentClassName}-page-btn`);

    pageBtns.forEach((btn) => {
      if (btn.id === activePage) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }, [activePage]);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="pagination">
        {pages.map((page, index) => {
          return (
            <button
              id={`page-btn-${page}`}
              className={`${parentClassName}-page-btn pageIdxBtn`}
              key={index}
              onClick={() => {
                handlePageBtnClick(`page-btn-${page}`, page);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
