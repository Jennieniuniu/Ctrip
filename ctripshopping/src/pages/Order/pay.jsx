import React from "react";
import Usernavigation from "../../components/usernavigation";
import Ctripfooter from "../../components/ctripfooter";
import Sideselect from "../../components/sideselect";
import { Steps, Button, Modal } from "antd";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  CheckOutlined,
} from "@ant-design/icons";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as loginActionCreator } from "../LoginRegister/loginstore";
import { actionCreator as orderActionCreator } from "./orderstore";
import { useLocation, useNavigate } from "react-router-dom";

// =======================================支付===========================================
function Pay(props) {
  const { userData, orderFn } = props;
  const selectTicketInfo = useLocation();
  const { selectInfo, ticketChooseInfo } = selectTicketInfo.state;
  const localBalance = parseInt(localStorage.getItem("localBalance"));
  const localCoupon = parseInt(localStorage.getItem("localCoupon"));
  const orderStatusStr = "已支付";
  const warning = () => {
    Modal.warning({
      title: "余额不足",
      content: "请尽快找管理员充值！",
    });
  };
  const navigate = useNavigate();
  const orderPay = async () => {
    const newBalance = localBalance + localCoupon - ticketChooseInfo.priceAll;
    const newCoupon = 0;
    const workid = userData.workid;
    const { data } = await orderFn.syncOrderAc({
      newBalance,
      newCoupon,
      workid,
      orderStatusStr,
    });
    if (newBalance < 0) {
      warning();
    } else {
      const newUserInfo = { ...userData, balance: newBalance, coupon: 0 };
      // 存储余额到本地
      localStorage.setItem("localBalance", newBalance);
      localStorage.setItem("localCoupon", 0);
      navigate("/user/travel/location/success", {
        state: { newUserInfo, ticketChooseInfo },
      });
    }
  };
  return (
    <>
      <Usernavigation />
      <Sideselect />
      <div style={{ width: "50rem", padding: "3rem 5rem", margin: "auto" }}>
        <Steps
          items={[
            {
              title: "已选",
              status: "finish",
              icon: <CheckOutlined />,
            },
            {
              title: "信息填写",
              status: "finish",
              icon: <SolutionOutlined />,
            },
            {
              title: "待支付",
              status: "process",
              icon: <LoadingOutlined />,
            },
            {
              title: "订单完成",
              status: "wait",
              icon: <SmileOutlined />,
            },
          ]}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "2rem",
          }}
        >
          <div
            style={{
              width: "15rem",
              padding: "1rem 2rem",
              border: "2px solid #666666",
              borderRadius: "1rem",
              background: "#48D1CC",
            }}
          >
            <img
              src={selectInfo.url}
              alt="图片"
              style={{
                height: "12rem",
                margin: "0.5rem 1.5rem",
                borderRadius: "2rem",
                border: "2px solid 		#696969",
              }}
            />
            <div>
              <h3>{selectInfo.name}</h3>
              <h5>日期:{ticketChooseInfo.ticketDate}</h5>
              <h5>订票信息：{ticketChooseInfo.ticketStr}</h5>
              <h3>订单金额:￥{ticketChooseInfo.priceAll}</h3>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #666666",
              borderRadius: "1rem",
              height: "27rem",
              width: "20rem",
            }}
          >
            <div>
              <img
                src="../../../余额.png"
                alt="图片"
                style={{
                  width: "15rem",
                  height: "8rem",
                  margin: "1rem 2rem 0rem",
                }}
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
                    position: "relative",
                    left: "3rem",
                    top: "-7rem",
                    fontSize: "2.5rem",
                    color: "#000",
                  }}
                >
                  {`${localBalance} 余额 `}
                </div>
              </div>
            </div>
            <div style={{ padding: "0 3rem" }}>
              <img
                src="../../../优惠券.png"
                alt="图片"
                style={{ height: "8rem", margin: "1rem 3rem" }}
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
                    top: "-9rem",
                    fontSize: "1.8rem",
                    color: "#000",
                  }}
                >
                  {localCoupon}
                  <h6>优惠券</h6>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  margin: "0 3rem",
                }}
              >
                实际消费金额:
                {ticketChooseInfo.priceAll - localCoupon < 0
                  ? 0
                  : ticketChooseInfo.priceAll - localCoupon}
                <Button
                  type="primary"
                  key="hotel"
                  style={{
                    position: "relative",
                    left: "-0.5rem",
                    top: "1.5rem",
                  }}
                  onClick={orderPay}
                >
                  支付
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ctripfooter />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.login.user,
    ticketData: state.order.orderInfo.ticket,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginFn: bindActionCreators(loginActionCreator, dispatch),
    orderFn: bindActionCreators(orderActionCreator, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pay);
