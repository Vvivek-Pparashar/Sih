import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import NewsLetter from "./components/newsletter/NewsLetter";
import Global from "./components/global/Global";
import AboutUs from "./components/aboutUs/AboutUs";
import PopularProducts from "./components/popularProducts/PopularProducts";
import Work from "./components/work/Work";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="l-m">
        <div className="l-m-f">
          <nav>
            <h1>
              <span>Uni</span>tech
            </h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>contact</li>
              <Link to={"/projects"} className="Link">
                <li>Projects</li>
              </Link>
            </ul>
            <button>Sign in</button>
          </nav>

          <div className="l-m-f-c">
            <div className="l-m-f-c-l">
              <h1>
                Perfect place for <br />
                your unique <br />
                idea✌
              </h1>
              <p>
                unique ideas starts with the recognition of truly <br />
                innovative and one-of-a-kind concepts.
              </p>

              <Link to={"/AddProject"}>
                <button className="l-m-f-c-l-buton">Get started</button>
              </Link>

              <img
                src={"../assests/comment.png"}
                alt="comment"
                className="comment-img"
              />
            </div>
            <div className="l-m-f-c-r">
              <img
                src={"../assests/heroImg.png"}
                alt="heroImg"
                className="hero-img"
              />
            </div>
          </div>
        </div>
        <Work />
        <AboutUs />
        <PopularProducts />
        <Global />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default App;
