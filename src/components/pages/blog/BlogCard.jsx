import React, { lazy, useEffect, useState } from "react";
import { getBlog } from "../../../mock/data";
import { getImageURL } from "../../../utils/image-utils";
import Pagination from "../../common/pagination/Pagination";
import "./Blog.css";

const BlogCard = () => {
  const blogs = getBlog();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = blogs.slice(firstPostIndex, lastPostIndex);

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

  return (
    <>
      <section className="blog padding">
        <div className="container grid2">
          {currentPosts.map((blog) => {
            return (
              <div className="items shadow" key={blog.id}>
                <div className="img">
                  <img
                    src={getImageURL("blog", blog.cover)}
                    alt={blog.title}
                    loading={lazy}
                  />
                </div>
                <div className="text">
                  <div className="admin flexSB">
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{blog.type}</label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt"></i>
                      <label htmlFor="">{blog.date}</label>
                    </span>
                    <span>
                      <i className="fa fa-comments"></i>
                      <label htmlFor="">{blog.com}</label>
                    </span>
                  </div>
                  <h1>{blog.title}</h1>
                  <p>{blog.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          parentClassName="blog"
          totalPosts={blogs.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
};

export default BlogCard;
