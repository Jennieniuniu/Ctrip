import React, { useState } from "react";
import Login from "./login";
import Register from "./register";
import Ctripfooter from "../../components/ctripfooter";
import {
  loginHeaderStyle,
  loginContentStyle,
  loginContentBoxStyle,
} from "../../config/userStyle";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;

// =======================================首页================================
function Home() {
  const items = [
    {
      label: "登录",
      key: "login",
    },
    {
      label: "注册",
      key: "register",
    },
  ];
  const [current, setCurrent] = useState("login");
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout>
      {/* 头部 */}
      <Header style={loginHeaderStyle}>
        {/* 左logo */}
        <img
          src="./logo.png"
          alt="logo"
          style={{ height: "5rem", margin: "0.5rem 2rem" }}
        />

        {/* 右浏览器提示 */}
        <div style={{ margin: "0 2rem", fontSize: "15px" }}>
          <div
            style={{
              height: "1rem",
              margin: "0.5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="./firefox.png"
              alt="firefoxlogo"
              style={{ height: "1.5rem", margin: "1rem 0.5rem" }}
            />
            火狐浏览器
            <img
              src="./chrome.png"
              alt="firefoxlogo"
              style={{ height: "1.5rem", margin: "1rem 0.5rem" }}
            />
            谷歌浏览器
          </div>
          我们推荐您使用以上浏览器，完美支持携程福礼系统
        </div>
      </Header>
      {/* 内容 */}
      <Content style={loginContentStyle}>
        <div style={loginContentBoxStyle}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{
              opacity: 0.8,
              fontSize: "1rem",
              display: "flex",
              justifyContent: "space-around",
            }}
          />
          {current === "login" ? <Login /> : <Register />}
        </div>
      </Content>
      {/* 尾部 */}
      <Ctripfooter />
    </Layout>
  );
}

export default Home;
