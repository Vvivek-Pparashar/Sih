import React from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "antd";
import { Link, useParams } from "react-router-dom";
import data from "../data";
import "./SingleProject.css";

const SingleProject = () => {
  const { id } = useParams();
  const singleData = data.filter((e) => e.key == id);

  console.log(singleData);
  console.log(id);
  return (
    <div className="m-p">
      <div className="p-nav-left">
        <h1>
          <span>Uni</span>tech
        </h1>
        <div className="p-nav-left-ul">
          <div className="p-nav-left-li">
            <HomeOutlinedIcon />
            <Link to={"/"} className="Link">
              Home
            </Link>
          </div>
          <div className="p-nav-left-li">
            <AccountTreeOutlinedIcon />
            <Link to={"/Projects"} className="Link">
              Projects
            </Link>
          </div>
          <div className="p-nav-left-li">
            <ChatOutlinedIcon />
            <Link to={"/Inbox"} className="Link">
              Inbox
            </Link>
          </div>
          <div className="p-nav-left-li">
            <SearchOutlinedIcon />
            <Link to={"/Search"} className="Link">
              Search
            </Link>
          </div>
          <div className="p-nav-left-li">
            <SchoolOutlinedIcon />
            <Link to={"/Colleges"} className="Link">
              Colleges
            </Link>
          </div>
        </div>
      </div>

      <div className="p-right">
        <nav className="p-nav">
          <p style={{ fontWeight: "600", fontSize: "17px", color: "black" }}>
            Project SpotLight
          </p>
        </nav>

        <div className="p-right-cnt-s">
          <div className="p-right-cnt-s-l">
            <img
              src={singleData[0].img}
              alt="project img"
              style={{ marginBottom: "20px" }}
            />
            <h1>{singleData[0].title}</h1>
            <p style={{ marginBottom: "50px" }}>{singleData[0].s_d}</p>

            <h3 style={{ marginBottom: "10px" }}>Description :-</h3>
            <p>{singleData[0].l_d}</p>
          </div>
          <div className="p-right-cnt-s-r">
            <div>
              <h3>Author : </h3>
              <p>{singleData[0].author}</p>
            </div>

            <div>
              <h3>Roll No :</h3>
              <p>{singleData[0].Roll_No}</p>
            </div>
            <div>
              <h3>College : </h3>
              <p>{singleData[0].clg}</p>
            </div>
            <div>
              <h3>Tech Stack :</h3>
              <p>{singleData[0].tech_stack}</p>
            </div>
            <div>
              <h3>Git Link :</h3>
              <a href="https://github.com/Vvivek-Pparashar" target="__blank">
                https://github.com/Vvivek-Pparashar
              </a>
            </div>
            <div>
              <h3>Live Project Link : </h3>
              <a href="https://star-vest.vercel.app/" target="__blank">
                https://star-vest.vercel.app/
              </a>
            </div>
            <div>
              <h3>Linkedin : </h3>
              <a
                href="https://www.linkedin.com/in/vivek-parashar-developer/"
                target="__blank"
              >
                https://www.linkedin.com/in/vivek-parashar-developer/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
