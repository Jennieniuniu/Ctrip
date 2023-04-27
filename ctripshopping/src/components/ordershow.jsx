import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import {
  ContactsTwoTone,
  IdcardTwoTone,
  ProfileTwoTone,
  CrownTwoTone,
  MoneyCollectTwoTone,
} from "@ant-design/icons";
import { iconStyle, redBtn, yellowBtn, greenBtn } from "../config/userStyle";
import { nameRule, phoneRule, cardidRule } from "../config/inputRule";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as orderActionCreator } from "../pages/Order/orderstore";
// 路由
import { useNavigate } from "react-router-dom";
//====================================订单展示====================================
function Ordershow(props) {
  // console.log(props);
  const { myInfo, orderInfo } = props.data;
  // console.log(orderInfo);
  const { userData, orderFn } = props;
  const navigate = useNavigate();
  const localBalance = parseInt(localStorage.getItem("localBalance"));
  const localCoupon = parseInt(localStorage.getItem("localCoupon"));
  const [form] = Form.useForm();
  const [isEditOpen, setisEditOpen] = useState(false);
  const [isPayOpen, setisPayOpen] = useState(false);
  // 修改信息
  const editOk = async () => {
    const operate = "修改订单";
    const workid = userData.workid;
    const editdata = form.getFieldsValue();
    const { orderid, name, phone, cardid } = editdata;
    const { data } = await orderFn.myOrderAc({
      operate,
      orderid,
      name,
      phone,
      cardid,
      workid,
    });
    const myInfo = data[1];
    const orderInfo = data[2];
    navigate("/user/my", { state: { myInfo, orderInfo } });
    setisEditOpen(false);
  };
  // 取消订单
  const editCancel = () => {
    setisEditOpen(false);
  };
  // 支付订单
  const payOk = async (e) => {
    const orderid = e.target.attributes[0].value;
    let price = parseInt(e.target.attributes[1].value);
    let coupon = parseInt(e.target.attributes[2].value);
    const workid = parseInt(e.target.attributes[3].value);
    const priceid = parseInt(e.target.attributes[4].value);
    const operate = "去支付";
    const { data } = await orderFn.myOrderAc({
      operate,
      orderid,
      price,
      coupon,
      workid,
      priceid,
    });
    const myInfo = data[2];
    const orderInfo = data[3];
    // 存储余额到本地
    localStorage.setItem("localBalance", myInfo[0].balance);
    localStorage.setItem("localCoupon", myInfo[0].coupon);
    navigate("/user/my", { state: { myInfo, orderInfo } });
    setisPayOpen(false);
  };
  const payCancel = () => {
    setisPayOpen(false);
  };
  const warning = () => {
    Modal.warning({
      title: "余额不足",
      content: "请尽快找管理员充值！",
    });
  };
  const OrderAction = async (e) => {
    const operate = e.target.innerHTML;
    if (operate === "取消订单") {
      const orderid = e.target.attributes[0].value;
      const orderprice = parseInt(e.target.attributes[1].value);
      const ordercoupon = parseInt(e.target.attributes[2].value);
      const workid = parseInt(e.target.attributes[3].value);
      const status = e.target.attributes[4].value;
      const priceid = e.target.attributes[5].value;
      const { data } = await orderFn.myOrderAc({
        operate,
        status,
        workid,
        orderid,
        orderprice,
        ordercoupon,
        priceid,
      });
      const myInfo = data[2];
      const orderInfo = data[3];
      // 存储余额到本地
      localStorage.setItem("localBalance", myInfo[0].balance);
      localStorage.setItem("localCoupon", myInfo[0].coupon);
      navigate("/user/my", { state: { myInfo, orderInfo } });
    }
    if (operate === "修改信息") {
      const orderid = e.target.attributes[0].value;
      const name = e.target.attributes[1].value;
      const phone = e.target.attributes[2].value;
      const cardid = e.target.attributes[3].value;
      console.log("修改订单啦！");
      form.setFieldsValue({
        name: name,
        phone: phone,
        cardid: cardid,
        orderid: orderid,
      });
      setisEditOpen(true);
    }
    if (operate === "去支付") {
      const price = e.target.attributes[0].value;
      const coupon = e.target.attributes[1].value;
      const balance = localBalance;
      if (balance - price - coupon < 0) {
        warning();
      } else {
        setisPayOpen(true);
      }
    }
  };

  return typeof orderInfo[0] == "string" || orderInfo[0] === undefined
    ? "暂无订单，快去选购吧！"
    : orderInfo.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-around",
              border: "2px solid #666666",
              borderRadius: "1rem",
              margin: "0.5rem auto",
            }}
            onClick={OrderAction}
          >
            <div>
              <h2 style={{ color: "#000" }}>{item.locationname}</h2>
              <div style={{ margin: "2rem" }}>
                <ProfileTwoTone style={iconStyle} />
                订单编号:{item.orderid}
              </div>
              <div style={{ margin: "2rem" }}>
                <CrownTwoTone style={iconStyle} />
                票型:{item.kind}
              </div>

              <div style={{ margin: "2rem" }}>
                <IdcardTwoTone style={iconStyle} />
                游客:{item.username}
              </div>
            </div>
            <div>
              <div
                style={{
                  margin: "1rem",
                  fontWeight: "bolder",
                  fontSize: "1.3rem",
                }}
              >
                {item.status === "已支付" ? (
                  <ContactsTwoTone
                    twoToneColor="#3CB371"
                    style={{ fontSize: "1.7rem", margin: "0.5rem 1rem " }}
                  />
                ) : (
                  <ContactsTwoTone
                    twoToneColor="#DC143C"
                    style={{ fontSize: "2rem", margin: " 0 1rem" }}
                  />
                )}
                订单状态:
                {item.status}
              </div>
              <div style={{ margin: "2rem", fontWeight: "bolder" }}>
                <del>价格:￥{item.price}</del>
              </div>
              <div style={{ margin: "2rem", fontWeight: "bolder" }}>
                {item.status === "已支付"
                  ? `实际付款:￥${
                      item.price - item.coupon < 0
                        ? 0
                        : item.price - item.coupon
                    }`
                  : `待付款:￥${
                      item.price - item.coupon < 0
                        ? 0
                        : item.price - item.coupon
                    }`}
              </div>
              {item.status === "未支付" ? (
                <button
                  data-price={item.price}
                  data-coupon={item.coupon}
                  style={yellowBtn}
                >
                  去支付
                </button>
              ) : (
                ""
              )}
              <button
                style={greenBtn}
                data-orderid={item.orderid}
                data-username={item.username}
                data-userphone={item.userphone}
                data-usercardid={item.usercardid}
                data-workid={item.workid}
              >
                修改信息
              </button>
              <button
                style={redBtn}
                data-orderid={item.orderid}
                data-price={item.price}
                data-coupon={item.coupon}
                data-workid={item.workid}
                data-status={item.status}
                data-priceid={item.priceid}
              >
                取消订单
              </button>
              <Modal
                title="游客信息"
                open={isEditOpen}
                closable={false}
                footer={null}
              >
                <Form form={form}>
                  <Form.Item label="订单编号" name={"orderid"}>
                    <Input bordered={false} disabled={true} />
                  </Form.Item>
                  <Form.Item label="姓名" name={"name"} rules={nameRule}>
                    <Input />
                  </Form.Item>
                  <Form.Item label="手机" name={"phone"} rules={phoneRule}>
                    <Input />
                  </Form.Item>
                  <Form.Item label="身份证" name={"cardid"} rules={cardidRule}>
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <button
                        type="primary"
                        htmlType="submit"
                        className="editok"
                        style={greenBtn}
                        onClick={editOk}
                      >
                        确认修改
                      </button>
                      <button
                        type="primary"
                        htmlType="submit"
                        className="editcancel"
                        style={redBtn}
                        onClick={editCancel}
                      >
                        取消
                      </button>
                    </div>
                  </Form.Item>
                </Form>
              </Modal>
              <Modal
                title="订单支付"
                open={isPayOpen}
                closable={false}
                footer={null}
              >
                <h2 style={{ color: "#000" }}>{item.locationname}</h2>
                <div style={{ margin: "2rem" }}>订单编号：{item.orderid}</div>
                <div style={{ margin: "2rem" }}>票型：{item.kind}</div>
                <div style={{ margin: "2rem" }}>游客：{item.username}</div>
                <div style={{ margin: "2rem" }}>价格：{item.price}</div>
                <div style={{ margin: "2rem" }}>
                  {item.coupon === 0
                    ? `无优惠券可使用`
                    : `可使用优惠券${item.coupon}`}
                </div>
                <div style={{ margin: "2rem" }}>
                  实际支付：
                  {item.price - item.coupon < 0 ? 0 : item.price - item.coupon}
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <button
                    data-orderid={item.orderid}
                    data-balance={item.price}
                    data-coupon={item.coupon}
                    data-workid={item.workid}
                    data-priceid={item.priceid}
                    onClick={payOk}
                    style={greenBtn}
                  >
                    确认支付
                  </button>
                  <button onClick={payCancel} style={redBtn}>
                    取消
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        );
      });
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
export default connect(mapStateToProps, mapDispatchToProps)(Ordershow);
