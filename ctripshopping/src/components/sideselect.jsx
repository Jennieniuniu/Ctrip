import React, { useState } from "react";
import {
  CompassTwoTone,
  ShopTwoTone,
  LikeTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";
import { Menu } from "antd";
import { sideSelectDivStyle, sideSelectMenuStyle } from "../config/userStyle";
// 路由
import { useNavigate } from "react-router-dom";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as loginActionCreator } from "../pages/LoginRegister/loginstore";
import { actionCreator as orderActionCreator } from "../pages/Order/orderstore";

// 侧边栏
function getItem(label, key, icon, children, type) {
  return { key, icon, children, label, type };
}
const items = [
  getItem(
    "游玩",
    "游玩",
    <CompassTwoTone twoToneColor="#FF6666" style={{ fontSize: "2rem" }} />
  ),
  getItem(
    "酒店",
    "酒店",
    <ShopTwoTone twoToneColor="#FF6666" style={{ fontSize: "2rem" }} />
  ),
  getItem(
    "我的",
    "我的",
    <SmileTwoTone twoToneColor="#FF6666" style={{ fontSize: "2rem" }} />
  ),
  getItem(
    "点赞",
    "点赞",
    <LikeTwoTone twoToneColor="#FF6666" style={{ fontSize: "2rem" }} />
  ),
];
//========================================侧边组件================================================
function Sideselect(props) {
  const { loginData, orderFn } = props;
  const navigate = useNavigate();
  const workid = loginData.workid;
  const [current, setCurrent] = useState("1");
  // 侧边栏展开收起功能
  const [collapsed, setCollapsed] = useState(true);
  const EnterCollapsed = async (e) => {
    if (e.key) {
      setCurrent(e.key);
    }
    const { data } = await orderFn.myOrderAc({ workid });
    const myInfo = data[0];
    const orderInfo = data[1];
    const thumbTop = data[2];
    switch (e.key) {
      case "游玩":
        navigate("/user");
        break;
      case "酒店":
        navigate("/user/hotel");
        break;
      case "我的":
        localStorage.setItem("selectKey", 1);
        navigate("/user/my", { state: { myInfo, orderInfo, thumbTop } });
        break;
      case "点赞":
        localStorage.setItem("selectKey", 2);
        navigate("/user/my", { state: { myInfo, orderInfo, thumbTop } });
        break;
      default:
    }
    let timeout = null;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setCollapsed(!collapsed);
    }, 1000);
  };
  const LeaveCollapsed = () => {
    let timeout = null;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setCollapsed(!collapsed);
    }, 500);
  };

  return (
    <div style={sideSelectDivStyle}>
      <Menu
        onClick={EnterCollapsed}
        onMouseEnter={EnterCollapsed}
        onMouseLeave={LeaveCollapsed}
        selectedKeys={[current]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        style={sideSelectMenuStyle}
      />
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Sideselect);
