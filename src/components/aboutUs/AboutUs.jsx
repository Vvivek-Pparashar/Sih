import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="m-l-a">
      <div className="m-l-a-l">
        <h1>About Us</h1>

        <p style={{marginBottom:"20px"}}>
          Our platform is dedicated to providing a comprehensive <br />
          toolkit for idea assessment and validation, ensuring that <br />
          groundbreaking concepts receive the recognition and <br />
          support they deserve.
        </p>

        <div className="m-l-a-l-p" style={{marginBottom:"15px"}}>
          <img src="../../../assests/inovate.png" alt="inovate" />
          <div className="m-l-a-l-p-c">
            <h3>Innovation:</h3>
            <p>
              We believe in the power of unique ideas to drive progress and
              change the world for the better.
            </p>
          </div>
        </div>
        <div className="m-l-a-l-p">
          <img src="../../../assests/connect.png" alt="comment" />
          <div className="m-l-a-l-p-c">
            <h3>Connect: </h3>
            <p>
              Foster collaboration and networking opportunities for inventors,
              entrepreneurs, and visionaries.
            </p>
          </div>
        </div>
      </div>

      <div className="m-l-a-r">
        <img src="../../../assests/aboutUs.png" alt="aboutus" />
      </div>
    </div>
  );
};

export default AboutUs;
