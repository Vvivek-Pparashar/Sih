import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="m-nl">
        <div className="m-nl-l">
          <h1>Subscribe NewsLetter</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            omnis, maiores quis voluptate sapiente quam neque optio inventore
          </p>
          <div className="m-nl-l-i">
            <input type="email" placeholder="Enter email address" />
            <button>Submit</button>
          </div>
        </div>

        <div className="m-nl-r">
          <img src="../../../assests/nlman.png" alt="nl-sideimage" />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
