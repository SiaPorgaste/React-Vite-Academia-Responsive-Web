import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../index.css";
import Head from "./Head";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (click2) {
      navigate("/courses", { state: { elementClassName: "courseCard" } });
      setClick2(false);
    }
  }, [click2, navigate]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setClick(false);
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
      <Head />
      <header className="flexSB">
        <nav>
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/" className="headerTxt">
                home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="headerTxt">
                all courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="headerTxt">
                about
              </Link>
            </li>
            <li>
              <Link to="/team" className="headerTxt">
                team
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="headerTxt">
                pricing
              </Link>
            </li>
            <li>
              <Link to="/journal" className="headerTxt">
                journal
              </Link>
            </li>
            <li>
              <Link to="/contact" className="headerTxt">
                contact
              </Link>
            </li>
          </ul>
          <div
            className="start"
            onClick={() => {
              setClick2(true);
            }}
          >
            <div className="button capitalTxt">get certificate</div>
          </div>
          <button
            className="toggle"
            onClick={() => {
              setClick(!click);
            }}
            aria-labelledby="Drop-down toggle"
          >
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
