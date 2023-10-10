import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const footer = () => {
  return (
    <>
      <div className="m-ftr">
        <div className="m-ftr-cn">
          <h1>
            <span>Uni</span>tech
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
            repellat neque, possimus rerum placeat ipsum
          </p>
        </div>

        <div className="m-ftr-lnk">
          <h3>Quick Links</h3>
          <Link to={"/"} className="Link">
            <p>Home</p>
          </Link>

          <Link to={"/"} className="Link">
            <p>About</p>
          </Link>

          <Link to={"/"} className="Link">
            <p>Contact</p>
          </Link>

          <Link to={"/"} className="Link">
            <p>Add Project</p>
          </Link>

          <Link to={"/"} className="Link">
            <p>All Projects</p>
          </Link>
        </div>

        <div className="m-ftr-lnk">
          <h3>Company</h3>
          <Link to={"/"} className="Link">
            <p>About</p>
          </Link>

          <Link to={"/"} className="Link">
            <p>Contact</p>
          </Link>

          <Link to={"/"} className="Link">
            <p>Careers</p>
          </Link>

          <Link to={"/"} className="Link">
            <p>Our Team</p>
          </Link>
        </div>

        <div className="m-ftr-lnk">
          <h3>Information</h3>
          <Link to={"/"} className="Link">
            <p>Privacy Policy</p>
          </Link>

          <Link to={"/"} className="Link">
            <p>Terms & Conditions</p>
          </Link>

          <Link to={"/"} className="Link">
            <p>FAQ's</p>
          </Link>
        </div>
      </div>

      <div className="m-ftr-right">
        <p>Copyright &#169; 2023 Unitech</p>
        <p>All Rights Reserved</p>
      </div>
    </>
  );
};

export default footer;
