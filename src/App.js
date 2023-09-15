import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import NewsLetter from "./components/newsletter/NewsLetter";
import Global from "./components/global/Global";

const App = () => {
  return (
    <>
      <div className="l-m">
        <div className="l-m-f">
          <nav>
            <h1><span>Uni</span>tech</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>contact</li>
              <li>Extra</li>
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
                Businesses generally promote their brand, products, <br />
                and services by identifying audience
              </p>

              <button className="l-m-f-c-l-buton">Get started</button>

              <img
                src={("../assests/comment.png")}
                alt="comment"
                className="comment-img"
              />
            </div>
            <div className="l-m-f-c-r">
              <img
                src={("../assests/heroImg.png")}
                alt="heroImg"
                className="hero-img"
              />
            </div>
          </div>
        </div>
        <Global/>
        <NewsLetter/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
