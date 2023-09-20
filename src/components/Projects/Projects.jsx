import React, { useEffect, useState } from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Avatar} from "antd";
import { Link } from "react-router-dom";

import "./Projects.css";
import axios from "axios";
// import { Avatar, AvatarGroup } from "@mui/material";
const Projects = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://cgc-seller-server.vercel.app/api/products")
      .then((response) => {
        setData(response.data);
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
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  textDecoration: "underline",
                }}
              >
                Projects
              </p>
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
          <p style={{ fontWeight: "600", fontSize: "17px", color: "black" }}>
            Project SpotLight
          </p>

          <div style={{ display: "flex", gap: "20px", position:"relative" }}>
            <input
              type="text"
              placeholder="Search Project"
              style={{
                padding: "5px 10px 5px 30px",
                border: "1px solid #B1B1B1",
                borderRadius: "20px",
              }}
            ></input>
            <SearchIcon style={{position:"absolute", top:"3px", left:"3px"}}/>

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

        <div className="p-right-cnt">
          {data.map((e) => {
            return (
              // <Link to={`/projects/${e.key}`}>
                <Link className="p-right-cnt-box Link" to={`/projects/${e._id}`}>
                  <img
                    src={`${e.img}`}
                    alt="project name"
                    style={{
                      width: "100%",
                      height:"170px",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <div className="p-right-cnt-box-c">
                    <h3>{e.title}</h3>
                    <p style={{ marginBottom: "20px", color: "black" }}>
                      {e.s_d}
                    </p>

                    <Avatar.Group
                      // maxCount={2}
                      maxStyle={{
                        color: "black",
                        backgroundColor: "#fde3cf",
                        // paddingTop:"10px"
                      }}
                    >
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=male&key=${Math.ceil(
                          Math.random() * 100
                        )}`}
                      />
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=female&key=${Math.ceil(
                          Math.random() * 100
                        )}`}
                      />
                      <Avatar
                        style={{
                          backgroundColor: "rgb(94 132 142)",
                          color: "black",
                        }}
                      >
                        <p style={{ color: "white" }}>
                          +{Math.ceil(Math.random() * 3)}
                        </p>
                      </Avatar>
                    </Avatar.Group>
                  </div>
                </Link>
              // </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
