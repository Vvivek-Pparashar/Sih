import React, { useEffect, useState } from "react";
// import React from "react";
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
import { Breadcrumb, Layout } from "antd";
import { InputNumber, Form, Select, DatePicker, Button } from "antd";
import tdata from "../data";
// Installed by "react-uploader".
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { Input } from "antd";
import axios from "axios";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free", // Get production API keys from Upload.io
});

const options = { multi: true };
// import React from 'react';
// import type { FormInstance } from 'antd/es/form';
// import data from "../data";
// import "./SingleProject.css";

const AddProject = () => {
  const { Option } = Select;
  const { Content } = Layout;
  const { TextArea } = Input;

  const [data, setData] = useState({
    title: "",
    s_d: "",
    l_d: "",
    img: "",
    tech_stack: "",
  });

  const onFinish = () => {
    console.log("hello")
    axios
      .post("https://unitech-navy.vercel.app/api/products", {
        ...data,
      })
      .then((res) => {
        console.log(res);
        // setModel(2);
      })
      .catch((err) => {
        console.log(err);
        // setModel(3);
      });
  };

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
              <p
                style={{
                  fontWeight: "600",
                  color: "black",
                  fontSize: "19px",
                  textDecoration: "underline",
                }}
              >
                Add
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-right">
        <nav className="p-nav">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p style={{ fontWeight: "600", fontSize: "17px", color: "black" }}>
              Add Project
            </p>
          </div>

          <div style={{ display: "flex", gap: "20px", position: "relative" }}>
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
          <Content className="site-layout-background">
            <div className="m-ae-form-cnt">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <div style={{ margin: "50px 0 30px 200px" }}>
                  {data.img !== "" ? (
                    <img
                      src={data.img}
                      alt="PassportImage"
                      width={"400px"}
                      height={"250px"}
                    />
                  ) : (
                    <UploadButton
                      uploader={uploader}
                      options={options}
                      onComplete={(files) => {
                        let x = files.map((x) => x.fileUrl).join("\n");
                        setData({ ...data, img: x });
                      }}
                    >
                      {({ onClick }) => (
                        <Button onClick={onClick}>Upload A Photo</Button>
                      )}
                    </UploadButton>
                  )}
                </div>

                <Form.Item
                  name="Title"
                  label="Title"
                  rules={[
                    {
                      required: true,
                      message: "Please input your input",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    minLength={3}
                    onChange={(e) => {
                      setData({ ...data, title: e.target.value });
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="One Line Description"
                  label="One Line Description"
                  rules={[
                    {
                      required: true,
                      message: "Please input One Line Description!",
                      whitespace: true,
                    },
                  ]}
                >
                  <TextArea
                    rows={2}
                    onChange={(e) => {
                      setData({ ...data, s_d: e.target.value });
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="Tech Stack"
                  label="Tech Stack"
                  rules={[
                    {
                      required: true,
                      message: "Tech Stack!",
                      whitespace: true,
                    },
                  ]}
                >
                  <TextArea
                    rows={2}
                    onChange={(e) => {
                      setData({ ...data, tech_stack: e.target.value });
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="Git Link"
                  label="Git Link"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Git Link",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input minLength={3} />
                </Form.Item>

                <Form.Item
                  name="Live Project Link"
                  label="Live Project Link"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Live Project Link",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input minLength={3} />
                </Form.Item>
                <Form.Item
                  name="About"
                  label="About"
                  rules={[
                    {
                      required: true,
                      message: "Please input About!",
                      whitespace: true,
                    },
                  ]}
                >
                  <TextArea
                    rows={10}
                    onChange={(e) => {
                      setData({ ...data, l_d: e.target.value });
                    }}
                  />
                </Form.Item>
                <Button
                  type="primary"
                  // onClick={onFinish}
                  style={{ marginLeft: "200px", color: "white" }}
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Content>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
