import React from "react";
import Profile from "../../assets/home1.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Kanishka Deo.</span>
            <br />
            Web Developer
          </h1>
          <p className="home__description">
            I am hard-working, ambitious and career oriented. Always willing to
            to learn and advance the best idea to achieve positive outcome.Have
            proven ability to transform client ideas into beautiful , functional
            design
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
