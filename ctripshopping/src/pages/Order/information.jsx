import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Usernavigation from "../../components/usernavigation";
import Ctripfooter from "../../components/ctripfooter";
import Sideselect from "../../components/sideselect";
import { Steps, Button, Form, Input, Layout } from "antd";
import {
  outerDivStyle,
  ticketOuterDivDStyle,
  imgTicketStyle,
  iconStyle,
  formOuterStyle,
  formStyle,
  ticketInfoStyle,
  ticketKindStyle,
} from "../../config/userStyle";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  CheckOutlined,
  EnvironmentTwoTone,
  CalendarTwoTone,
  CarryOutTwoTone,
} from "@ant-design/icons";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as loginActionCreator } from "../LoginRegister/loginstore";
import { actionCreator as orderActionCreator } from "./orderstore";
// ======================================填写信息====================================
function Information(props) {
  const { userData, orderFn } = props;
  const selectTicketInfo = useLocation();
  const navigate = useNavigate();
  const { selectInfo, ticketChooseInfo } = selectTicketInfo.state;
  const priceId = ticketChooseInfo.priceId;
  const [form] = Form.useForm();
  const orderStatusStr = "未支付";
  const gotoPay = async (userInfo) => {
    const userInfoArr = Object.values(userInfo);
    // console.log(ticketChooseInfo);
    const localCoupon = parseInt(localStorage.getItem("localCoupon"));
    const workid = userData.workid;
    // orderFn.syncOrderAc({});
    const { data } = await orderFn.syncOrderAc({
      selectInfo,
      ticketChooseInfo,
      userInfoArr,
      orderStatusStr,
      workid,
      localCoupon,
      priceId,
    });
    // console.log(data);
    navigate("/user/travel/location/pay", {
      state: { selectInfo, ticketChooseInfo },
    });
  };

  const onFill = () => {
    form.setFieldsValue({
      name0: userData.username,
      phone0: userData.phone,
      cardid0: userData.cardid,
    });
  };
  return (
    <>
      <Usernavigation />
      <div style={{ display: "flex" }}>
        {/* 填写信息 */}
        <div style={outerDivStyle}>
          <Steps
            items={[
              {
                title: "已选",
                status: "finish",
                icon: <CheckOutlined />,
              },
              {
                title: "信息填写",
                status: "wait",
                icon: <SolutionOutlined />,
              },
              {
                title: "待支付",
                status: "wait",
                icon: <LoadingOutlined />,
              },
              {
                title: "订单完成",
                status: "wait",
                icon: <SmileOutlined />,
              },
            ]}
          />

          <div style={ticketOuterDivDStyle}>
            <div>
              <img src={selectInfo.url} alt="图片" style={imgTicketStyle} />
            </div>
            <div>
              <h2>{selectInfo.name}</h2>
              <div style={{ margin: " -1rem 0 0 0" }}>
                <EnvironmentTwoTone style={iconStyle} />
                {selectInfo.address}
              </div>
              <div>
                <CalendarTwoTone style={iconStyle} />
                日期：{ticketChooseInfo.ticketDate}
              </div>
              <div>
                <CarryOutTwoTone style={iconStyle} />
                购票:{ticketChooseInfo.ticketStr}
              </div>
            </div>
            <div>
              <h2>订单金额:￥{ticketChooseInfo.priceAll}</h2>
            </div>
          </div>

          <div style={formOuterStyle}>
            <Form
              onFinish={gotoPay}
              form={form}
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              style={formStyle}
            >
              {ticketChooseInfo.ticketAll.map((item, index) => {
                return (
                  <div key={index} style={ticketInfoStyle}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <svg
                        t="1682265309080"
                        className="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="8485"
                        width="2rem"
                        height="2rem"
                      >
                        <path
                          d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 964a450.18 450.18 0 0 1-293.37-108.12 337.88 337.88 0 0 1 586.74 0A450.18 450.18 0 0 1 512 964zM367.31 551.37A204.63 204.63 0 1 1 512 611.3a203.27 203.27 0 0 1-144.69-59.93z m482.15 261.35a398.29 398.29 0 0 0-219.34-169.2c86.85-43.4 146.5-133.15 146.5-236.84 0-146.15-118.47-264.63-264.62-264.63S247.38 260.53 247.38 406.68c0 103.7 59.65 193.44 146.5 236.84a398.28 398.28 0 0 0-219.34 169.21 452.3 452.3 0 1 1 674.92 0z"
                          p-id="8486"
                          data-spm-anchor-id="a313x.7781069.0.i0"
                          className="selected"
                          fill="#1296db"
                        ></path>
                      </svg>
                      <div style={ticketKindStyle}>门票类型-{item}</div>
                    </div>

                    <Form.Item
                      label="姓名"
                      name={"name" + index}
                      rules={[
                        {
                          required: true,
                          message: "请输入姓名!",
                        },
                      ]}
                    >
                      <Input style={{ border: "2px solid #CCC" }} />
                    </Form.Item>
                    <Form.Item
                      label="手机"
                      name={"phone" + index}
                      rules={[
                        {
                          required: true,
                          message: "请输入手机号!",
                        },
                        {
                          pattern: /^\d{11}$/,
                          message: "请输入正确手机号!",
                        },
                      ]}
                    >
                      <Input style={{ border: "2px solid #CCC" }} />
                    </Form.Item>
                    <Form.Item
                      label="身份证"
                      name={"cardid" + index}
                      rules={[
                        {
                          required: true,
                          message: "请输入身份证号!",
                        },
                        {
                          pattern: /^\d{17}(\d|X|x)$/,
                          message: "请输入正确的身份证号!",
                        },
                      ]}
                    >
                      <Input style={{ border: "2px solid #CCC" }} />
                    </Form.Item>
                  </div>
                );
              })}
              <Form.Item>
                <div style={{ display: "flex" }}>
                  <Button
                    htmlType="button"
                    onClick={onFill}
                    style={{ margin: "0 2rem 0 8rem " }}
                  >
                    一键填写我的信息
                  </Button>
                  <Button htmlType="submit" style={{ margin: "0 2rem" }}>
                    去支付
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div
          style={{
            padding: "15rem 2rem 3rem",
            borderLeft: "1px solid #CCC",
          }}
        >
          <img
            src="../../../QRcode.png"
            alt="二维码"
            style={{ height: "15rem", margin: "auto" }}
          />
          <div
            style={{
              padding: "1rem",
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: "bolder",
            }}
          >
            加入我们！
            <br />
            {selectInfo.name}游玩群
          </div>
        </div>
      </div>

      <Sideselect />
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
    orderFn: bindActionCreators(orderActionCreator, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Information);
