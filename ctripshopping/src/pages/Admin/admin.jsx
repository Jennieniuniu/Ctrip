import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Ctripfooter from "../../components/ctripfooter";
import adminItems from "../../config/adminMenu";
import { headerStyle, contentStyle } from "../../config/adminStyle";
import { iconStyle } from "../../config/userStyle";
import { Menu, Layout } from "antd";
import { LogoutOutlined, HomeOutlined } from "@ant-design/icons";
import Welfare from "./welfare";
import Information from "./information";
import Allorder from "./allorder";
import Pictureshow from "./pictureshow";
import { logout } from "../LoginRegister/loginstore/actionCreator";
// 路由
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
export default function Admin() {
  const navigate = useNavigate();
  const onClick = (e) => {
    switch (e.key) {
      case "员工基本信息":
        navigate("/admin/role/information");
        break;
      case "员工福利":
        navigate("/admin/role/welfare");
        break;
      case "所有订单":
        localStorage.setItem("selectKey", 1);
        navigate("/admin/order");
        break;
      case "照片秀":
        localStorage.setItem("selectKey", 2);
        navigate("/admin/picture");
        break;
      default:
    }
  };
  const gotoMyhome = () => {
    navigate("/user");
  };
  const exit = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div>
        <Header style={headerStyle}>
          <img
            src="../../logo.png"
            alt="logo"
            style={{ height: "5rem", margin: "0.5rem 2rem" }}
          />
          <div
            style={{
              width: "15rem",
              padding: "2rem",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              onClick={gotoMyhome}
              style={{
                cursor: "pointer",
              }}
            >
              <HomeOutlined style={iconStyle} />
              我的主页
            </div>
            <div style={{ cursor: "pointer" }} onClick={exit}>
              <LogoutOutlined style={iconStyle} />
              退出
            </div>
          </div>
        </Header>
      </div>
      <Layout>
        <Sider>
          <Menu
            onClick={onClick}
            style={{
              width: "13rem",
              height: "100%",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={adminItems}
          />
        </Sider>
        <Content style={contentStyle}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/admin/role/information" />}
            ></Route>
            <Route path="/role/information" element={<Information />} />
            <Route path="/role/welfare" element={<Welfare />} />
            <Route path="/order" element={<Allorder />} />
            <Route path="/picture" element={<Pictureshow />} />
          </Routes>
        </Content>
      </Layout>

      <Ctripfooter />
    </>
  );
}
