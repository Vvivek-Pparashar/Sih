import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="l-m">
        <div className="l-m-f">
          <nav>Vivek isgr8</nav>

          <div className="l-m-f-c">
            <div>
              <h1>
                Perfect place for <br />
                your unique <br />
                idea✌
              </h1>
              <p>
                Businesses generally promote their brand, products, and services
                by identifying audience
              </p>

              <img src={require("./comment.png")} alt="heroImg" className="comment-img" />
            </div>
            <img src={require("./heroImg.png")} alt="heroImg" className="hero-img" />
          </div>
        </div>
        <div className="l-m-s">sdkfjslkdfj</div>
      </div>
    </>
  );
};

export default App;
