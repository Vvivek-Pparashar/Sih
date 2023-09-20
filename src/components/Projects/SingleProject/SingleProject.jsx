import React, { useEffect, useState } from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "antd";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Link, useParams } from "react-router-dom";
// import data from "../data";
import "./SingleProject.css";
import axios from "axios";

const SingleProject = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  // console.log(data);

  useEffect(() => {
    axios
      .get(`https://cgc-seller-server.vercel.app/api/products/${id}`)
      .then((response) => {
        setData(response.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          <div className="p-nav-left-li">
            <AddIcon />
            <Link to={"/AddProject"} className="Link">
              Add
            </Link>
          </div>
        </div>
      </div>

      <div className="p-right">
        <nav className="p-nav">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link
              className="Link"
              to={"/projects"}
              style={{ marginTop: "5px" }}
            >
              <ArrowCircleLeftOutlinedIcon />
            </Link>
            <p style={{ fontWeight: "600", fontSize: "17px", color: "black" }}>
              View Project
            </p>
          </div>

          <div style={{ display: "flex", gap: "20px", position: "relative" }}>
            <input
              type="text"
              placeholder="Search Project"
              style={{
                padding: "5px 10px 5px 30px",
                border: "1px solid #B1B1B1",
                borderRadius: "20px",
              }}
            ></input>
            <SearchIcon
              style={{ position: "absolute", top: "3px", left: "3px" }}
            />

            <button
              style={{
                backgroundColor: "#1565c0",
                padding: "5px 20px",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Sign In
            </button>
          </div>
        </nav>

        <div className="p-right-cnt-s">
          <div className="p-right-cnt-s-l">
            <img
              src={data.img}
              alt="project img"
              style={{ marginBottom: "20px" }}
            />
            <h1>{data.title}</h1>
            <p style={{ marginBottom: "50px" }}>{data.s_d}</p>

            <h3 style={{ marginBottom: "10px" }}>Description :-</h3>
            <p>{data.l_d}</p>

            <input
              type="text"
              placeholder="Post Your Comment"
              style={{
                marginTop: "30px",
                width: "100%",
                padding: "10px 20px",
                borderRadius: "40px",
                border: "1px solid #B1B1B1",
              }}
            />
          </div>
          <div className="p-right-cnt-s-r">
            <div>
              <h3>Author : </h3>
              <p>Vivek Parashar</p>
            </div>

            <div>
              <h3>Roll No :</h3>
              <p>2121753</p>
            </div>
            <div>
              <h3>College : </h3>
              <p>Chandigarh Group of Colleges, Landran</p>
            </div>
            <div>
              <h3>Tech Stack :</h3>
              <p>{data.tech_stack}</p>
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
