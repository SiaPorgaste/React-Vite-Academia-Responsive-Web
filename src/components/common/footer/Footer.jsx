import React from "react";
import { Link } from "react-router-dom";
import { getBlog } from "../../../mock/data";
import { getImageURL } from "../../../utils/image-utils";
import "./Footer.css";

const Footer = () => {
  const handleSendNews = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing! We will send updates to ${email}.`);
  };

  const blogs = getBlog();

  return (
    <>
      <section className="newsletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the lastest update</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="right row">
            <form action="#" onSubmit={(e) => handleSendNews(e)}>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <button className="fa fa-paper-plane" type="submit"></button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ACADEMIA</h1>
            <span className="capitalTxt">online education & learning</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <a href="https://www.facebook.com" target="_blank">
              <i className="fa-brands fa-facebook-f icon"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <i className="fa-brands fa-instagram icon"></i>
            </a>
            <a href="https://www.x.com" target="_blank">
              <i className="fa-brands fa-x-twitter icon"></i>
            </a>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Courses</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <li>
                <Link to="pricing">Pricing</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>
                <Link to="#">Feedbacks</Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Posts</h3>
            {blogs.slice(0, 3).map((blog) => {
              return (
                <div className="flexSB items" key={blog.id}>
                  <div className="img">
                    <img
                      src={getImageURL("blog", blog.cover)}
                      alt={blog.title}
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
                    <h4>{blog.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +2 392 3929 210
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                example@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved | This website is made with
          <i className="fa fa-heart"></i> by Sang | Original template by
          GorkhCoder
        </p>
      </div>
    </>
  );
};

export default Footer;
