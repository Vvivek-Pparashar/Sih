import React from "react";
import "./App.css";

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
                src={require("./comment.png")}
                alt="heroImg"
                className="comment-img"
              />
            </div>
            <div className="l-m-f-c-r">
              <img
                src={require("./heroImg.png")}
                alt="heroImg"
                className="hero-img"
              />
            </div>
          </div>
        </div>
        <div className="l-m-s">sdkfjslkdfj</div>
      </div>
    </>
  );
};

export default App;
