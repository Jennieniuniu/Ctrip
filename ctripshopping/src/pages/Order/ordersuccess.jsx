import React from "react";
import Usernavigation from "../../components/usernavigation";
import Ctripfooter from "../../components/ctripfooter";
import Sideselect from "../../components/sideselect";
import { Button, Result, Steps } from "antd";
import {
  SmileOutlined,
  SolutionOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as loginActionCreator } from "../LoginRegister/loginstore";
// =======================================支付成功========================================
function Ordersuccess(props) {
  const { userData } = props;
  const navigate = useNavigate();
  // 订单编号 下单时间+workid
  const datecode = new Date().getTime();
  const orderid = "" + datecode + userData.workid;
  const gobackHome = () => {
    navigate("/user");
  };
  return (
    <>
      <Usernavigation />
      <Sideselect />
      <div
        style={{
          width: "50rem",
          height: "24rem",
          padding: "3rem 5rem",
          margin: "auto",
        }}
      >
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
              title: "已支付",
              status: "finish",
              icon: <CheckOutlined />,
            },
            {
              title: "订单完成",
              status: "finish",
              icon: <SmileOutlined />,
            },
          ]}
        />
        <Result
          status="success"
          title="订单支付成功!"
          subTitle={`订单编号: ${orderid}`}
          extra={[
            <Button type="primary" key="hotel">
              去订酒店
            </Button>,
            <Button key="back" onClick={gobackHome}>
              返回主页
            </Button>,
          ]}
        />
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
export default connect(mapStateToProps, mapDispatchToProps)(Ordersuccess);
