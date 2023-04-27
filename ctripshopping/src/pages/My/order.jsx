import React from "react";
import { Avatar, Tabs } from "antd";
import Usernavigation from "../../components/usernavigation";
import Ctripfooter from "../../components/ctripfooter";
import Sideselect from "../../components/sideselect";
import Orderlist from "../../components/orderlist";
import Thumb from "../../components/thumb";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as loginActionCreator } from "../LoginRegister/loginstore";
import { useLocation } from "react-router-dom";
// ======================================我的===================================
function Order() {
  const myOrderInfo = useLocation();
  let { myInfo, orderInfo, thumbTop } = myOrderInfo.state;
  const localBalance = parseInt(localStorage.getItem("localBalance"));
  const localCoupon = parseInt(localStorage.getItem("localCoupon"));
  const selectKey = parseInt(localStorage.getItem("selectKey"));

  const item = [
    {
      label: "我的订单",
      key: 1,
      // children: <Orderlist/>,
      children: <Orderlist data={{ myInfo, orderInfo }} />,
    },
    {
      label: "点赞Top榜",
      key: 2,
      children: <Thumb data={{ thumbTop }} style={{ display: "flex" }} />,
    },
  ];
  return (
    <>
      <Usernavigation />
      <Sideselect />
      <div
        style={{
          width: "50rem",
          minHeight: "22.5rem",
          padding: "3rem ",
          margin: "1.5rem auto 0",
          borderLeft: "3px solid #CCCCCC",
          borderRight: "3px solid #CCCCCC",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2rem 8rem 0rem 1rem",
            textAlign: "center",
          }}
        >
          <div>
            <Avatar
              size={{
                xs: 80,
                sm: 80,
                md: 80,
                lg: 80,
                xl: 80,
                xxl: 100,
              }}
              src={"../avatar.jpg"}
            />
            <h3>{myInfo[0].username}</h3>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                src="../../余额.png"
                alt="图片"
                style={{ width: "12rem", height: "7rem", margin: "1rem" }}
              />
              <div
                style={{
                  position: "absolute",
                  fontSize: "3rem",
                  color: "#000",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    position: "relative",
                    left: "2rem",
                    top: "-7rem",
                    fontWeight: "bolder",
                    fontSize: "1.5rem",
                    color: "#000",
                  }}
                >
                  余额：{localBalance}
                </div>
              </div>
            </div>
            <div>
              <img
                src="../../优惠券.png"
                alt="图片"
                style={{ width: "12rem", height: "7rem", margin: "1rem" }}
              />
              <div
                style={{
                  position: "absolute",
                  fontSize: "3rem",
                  color: "#000",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    position: "relative",
                    left: "5rem",
                    top: "-7.5rem",
                    fontWeight: "bolder",
                    fontSize: "1.5rem",
                    color: "#000",
                  }}
                >
                  优惠券
                  <p>{localCoupon}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tabs tabPosition={"left"} items={item} defaultActiveKey={selectKey} />
      </div>
      <Ctripfooter />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.login.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginFn: bindActionCreators(loginActionCreator, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
