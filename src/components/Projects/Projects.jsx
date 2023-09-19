import React from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import "./Projects.css";
const Projects = () => {
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
      </div>
    </div>
  );
};

export default Projects;
