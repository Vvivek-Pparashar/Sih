import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <div className="m-l-w">
      <h1>How It Works</h1>
      <p>
        it involves comparing various attributes and characteristics of the
        products to <br />
        determine their similarity.
      </p>
      <div className="m-l-w-c">
        <div className="m-l-w-c-b">
          <img src="../../../assests/work1.png" alt="work" />
          <h2>Product Upload</h2>
          <p>
            Enable users to upload the project they want to check for
            plagiarism.
          </p>
        </div>
        <div className="m-l-w-c-b">
          <img src="../../../assests/work2.png" alt="work" />
          <h2>Plagiarism Detection:</h2>
          <p>
            Compare the uploaded content against a database of reference
            materials, internet sources, and other user-uploaded documents.
          </p>
        </div>
        <div className="m-l-w-c-b">
          <img src="../../../assests/work3.png" alt="work" />
          <h2>Project Showcase:</h2>
          <p>
            Highlight selected unique projects on your platform, website, or
            other promotional materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
