import React, { useState } from "react";

import { headerStyle, navLayoutStyle, navMenuStyle } from "../config/userStyle";
import { Layout, Menu } from "antd";
import {
  HomeTwoTone,
  CrownTwoTone,
  MessageTwoTone,
  ScheduleTwoTone,
  LogoutOutlined,
} from "@ant-design/icons";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as loginActionCreator } from "../pages/LoginRegister/loginstore";
import { actionCreator as orderActionCreator } from "../pages/Order/orderstore";
// 路由
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

//========================================导航栏组件================================================
function Usernavigation(props) {
  const { loginData, orderFn, loginFn } = props;
  const navigate = useNavigate();
  const [current, setCurrent] = useState("home");
  const workid = loginData.workid;

  // 导航栏点击
  const onClick = async (e) => {
    setCurrent(e.key);
    switch (e.key) {
      case "home":
        navigate("/user");
        break;
      case "order":
        const { data } = await orderFn.myOrderAc({ workid });
        const myInfo = data[0];
        const orderInfo = data[1];
        const thumbTop = data[2];
        localStorage.setItem("selectKey", 1);
        navigate("/user/my", { state: { myInfo, orderInfo, thumbTop } });
        break;
      case "exit":
        loginFn.logout();
        navigate("/");
        break;
      case "service":
        navigate("/user/robot");
        break;
      case "back":
        window.history.back();
        break;
      default:
    }
  };
  // 导航栏设置
  const navItems = [
    {
      label: "首页",
      key: "home",
      icon: <HomeTwoTone twoToneColor="#87CEEB" style={{ fontSize: "2rem" }} />,
    },
    {
      label: "用户",
      key: "user",
      icon: (
        <CrownTwoTone twoToneColor="#87CEEB" style={{ fontSize: "2rem" }} />
      ),
      children: [{ label: `Hello!${loginData.username}`, key: "username" }],
    },
    {
      label: "客服",
      key: "service",
      icon: (
        <MessageTwoTone twoToneColor="#87CEEB" style={{ fontSize: "2rem" }} />
      ),
    },
    {
      label: "我的订单",
      key: "order",
      icon: (
        <ScheduleTwoTone twoToneColor="#87CEEB" style={{ fontSize: "2rem" }} />
      ),
    },
    loginData.role === "管理员"
      ? {
          label: "返回",
          key: "back",
          icon: (
            <LogoutOutlined
              twoToneColor="#87CEEB"
              style={{ fontSize: "2rem" }}
            />
          ),
        }
      : "",
    {
      label: "退出",
      key: "exit",
      icon: (
        <LogoutOutlined twoToneColor="#87CEEB" style={{ fontSize: "2rem" }} />
      ),
    },
  ];
  return (
    <Layout style={navLayoutStyle}>
      <Header style={headerStyle}>
        <img
          src="../../../logobg.png"
          alt="logo"
          style={{ height: "5rem", margin: "0.5rem 2rem" }}
        />
        <Menu
          items={navItems}
          onClick={onClick}
          mode="horizontal"
          style={navMenuStyle}
        />
      </Header>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    loginData: state.login.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginFn: bindActionCreators(loginActionCreator, dispatch),
    orderFn: bindActionCreators(orderActionCreator, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Usernavigation);
