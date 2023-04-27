import React, { useState, useRef } from "react";
import Usernavigation from "../../components/usernavigation";
import Ctripfooter from "../../components/ctripfooter";
import Sideselect from "../../components/sideselect";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  CheckOutlined,
  HeartFilled,
  StarFilled,
  PhoneTwoTone,
  CalendarTwoTone,
  DashboardTwoTone,
} from "@ant-design/icons";

import { Steps, Input, Button, Table, DatePicker, Modal } from "antd";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as ticketActionCreator } from "../TravelHotel/ticketstore";
import { actionCreator as orderActionCreator } from "./orderstore";
// 路由组件获取值
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";
// 时间格式化
import { dateFormat } from "../../utils/dateformat";

const { Column } = Table;
const disabledDate = (current) => {
  return (
    // 大于两天后的日期
    dayjs().startOf("day").add(2, "day") < current ||
    //小于今天的日期
    current < dayjs().add(-1, "day")
  );
};
// ======================================选购=======================================
function Choose(props) {
  const { ticketFn, orderFn } = props;

  const selectdata = useLocation();
  const navigate = useNavigate();
  const { selectInfo, priceInfo } = selectdata.state;

  const [ticketDate, setticketDate] = useState(dateFormat(new Date()));
  const [ticketPrice, setticketPrice] = useState(priceInfo);
  // 购票数量
  const kind1Num = useRef(null);
  const kind2Num = useRef(null);
  const kind3Num = useRef(null);
  // 遍历票价信息以及点击+-功能  使用useRef current属性
  // 检查是否点击购票
  const noStock = () => {
    Modal.warning({
      title: "余票不足",
      content: "您选的票型没有余票啦！看看其他日期的吧！",
    });
  };
  const noStart = () => {
    // setTimeout(() => {
    //   navigate("/user/travel/location/choose", {
    //     state: { selectInfo, priceInfo },
    //   });
    // }, 3000);
    Modal.warning({
      title: "温馨提示",
      content: "尚未开始售票！",
    });
  };
  const increaseTicket1 = (value) => {
    if (kind1Num.current.input.value < ticketPrice[0].stock) {
      kind1Num.current.input.value++;
    } else {
      noStock();
    }
  };
  const decreaseTicket1 = (value) => {
    if (kind1Num.current.input.value > 0) {
      kind1Num.current.input.value--;
    }
  };
  const increaseTicket2 = (value) => {
    if (kind2Num.current.input.value < ticketPrice[1].stock) {
      kind2Num.current.input.value++;
    } else {
      noStock();
    }
  };
  const decreaseTicket2 = (value) => {
    if (kind2Num.current.input.value > 0) {
      kind2Num.current.input.value--;
    }
  };
  const increaseTicket3 = (value) => {
    if (kind3Num.current.input.value < ticketPrice[2].stock) {
      kind3Num.current.input.value++;
    } else {
      noStock();
    }
  };
  const decreaseTicket3 = (value) => {
    if (kind3Num.current.input.value > 0) {
      kind3Num.current.input.value--;
    }
  };
  const data = ticketPrice.map((item) => ({
    key: item.id,
    category: item.kind,
    price: item.price,
    stock: item.stock,
  }));

  data.length === 0
    ? noStart()
    : (data[0].number = (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" shape="circle" onClick={increaseTicket1}>
            +
          </Button>
          <Input
            ref={kind1Num}
            style={{ width: "2.5rem", margin: "0 1rem" }}
            defaultValue={0}
          />
          <Button type="primary" shape="circle" onClick={decreaseTicket1}>
            -
          </Button>
        </div>
      ));

  data.length === 0
    ? console.log("尚未售票")
    : (data[1].number = (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" shape="circle" onClick={increaseTicket2}>
            +
          </Button>
          <Input
            ref={kind2Num}
            style={{ width: "2.5rem", margin: "0 1rem" }}
            defaultValue={0}
          />
          <Button type="primary" shape="circle" onClick={decreaseTicket2}>
            -
          </Button>
        </div>
      ));
  data.length === 0
    ? console.log("尚未售票")
    : (data[2].number = (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" shape="circle" onClick={increaseTicket3}>
            +
          </Button>
          <Input
            ref={kind3Num}
            style={{ width: "2.5rem", margin: "0 1rem" }}
            defaultValue={0}
          />
          <Button type="primary" shape="circle" onClick={decreaseTicket3}>
            -
          </Button>
        </div>
      ));

  // 选择日期
  const dateChoose = async (value) => {
    setticketDate(dateFormat(value.$d));
    const selectlocation = selectInfo.name;
    const chooseDate = value.$d;
    const { data } = await ticketFn.pricedatailAc({
      selectlocation,
      chooseDate,
    });
    if (data.length === 0) {
      noStart();
    } else {
      setticketPrice(data);
    }
  };
  // 检查是否点击购票
  const noChoose = () => {
    Modal.warning({
      title: "尚未选票",
      content: "快去选购吧！",
    });
  };
  // 买票
  const buyTicket = () => {
    let ticketAll = [];
    let priceArr = [];
    let priceId=[];
    const kind1 = kind1Num.current.input.value;
    const kind2 = kind2Num.current.input.value;
    const kind3 = kind3Num.current.input.value;
    let ticketStr =
      (kind1 == 0 ? "" : ` 成人票${kind1}张 `) +
      (kind2 == 0 ? "" : ` 老人票${kind2}张 `) +
      (kind3 == 0 ? "" : ` 儿童票${kind3}张 `);

    for (let i = 0; i < kind1; i++) {
      ticketAll.push("成人票");
      priceArr.push(ticketPrice[0].price);
      priceId.push(priceInfo[0].id)
    }
    for (let i = 0; i < kind2; i++) {
      ticketAll.push("老人票");
      priceArr.push(ticketPrice[1].price);
      priceId.push(priceInfo[1].id)
    }
    for (let i = 0; i < kind3; i++) {
      ticketAll.push("儿童票");
      priceArr.push(ticketPrice[2].price);
      priceId.push(priceInfo[2].id)
    }
    const priceAll =
      kind1 * ticketPrice[0].price +
      kind2 * ticketPrice[1].price +
      kind3 * ticketPrice[2].price;
    let kindnum = [kind1, kind2, kind3];
    let ticketChooseInfo = {
      kindnum,
      ticketStr,
      ticketDate,
      ticketAll,
      priceArr,
      priceAll,
      priceId
    };
    if (kind1 == 0 && kind2 == 0 && kind3 == 0) {
      noChoose();
    } else {
      orderFn.chooseAc({ ...ticketChooseInfo, ...selectInfo });
      navigate("/user/travel/location/information", {
        state: { ticketChooseInfo, selectInfo },
      });
    }
  };
  // 图片加载更快速
  const pictureshow = JSON.parse(localStorage.getItem("selectPictureurl"));
  return (
    <>
      <Usernavigation />
      <Sideselect />
      <div
        style={{
          margin: "4rem auto 3rem",
          width: "50rem",
          padding: "3rem 5rem",
        }}
      >
        <Steps
          items={[
            {
              title: "选购",
              status: "wait",
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "3px solid #CCCCCC",
            borderRadius: "1rem",
            margin: "0.3rem auto",
            width: "40rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={pictureshow}
              alt="图片"
              style={{
                height: "10rem",
                width: "10rem",
                margin: "1rem",
                borderRadius: "2rem",
              }}
            />
            <div>
              <h2>{selectInfo.name}</h2>
              <p>{selectInfo.description}</p>
              <div style={{ fontSize: "0.5rem", margin: "-0.5rem 0 0 0 " }}>
                <DashboardTwoTone
                  style={{ fontSize: "1rem", margin: "0.5rem" }}
                />
                营业时间：{selectInfo.time}
              </div>
              <div style={{ fontSize: "0.5rem" }}>
                <PhoneTwoTone style={{ fontSize: "1rem", margin: "0.5rem" }} />
                热线电话：{selectInfo.phone}
              </div>
            </div>
          </div>
          <div>
            <div style={{ margin: "2rem 0" }}>
              <StarFilled style={{ color: "#FF9933", fontSize: "1rem" }} />
              评分{selectInfo.score}
            </div>
            <div style={{ margin: "2rem 0" }}>
              <HeartFilled style={{ color: "#CC3366", fontSize: "1rem" }} />
              收藏{selectInfo.collect}
            </div>
          </div>
        </div>
        {/* 日期选择 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0.5rem",
          }}
        >
          <h3>请选择购买门票日期：</h3>
          <DatePicker
            format="YYYY-MM-DD"
            disabledDate={disabledDate}
            style={{ width: "15rem", height: "2rem", margin: "1rem" }}
            onChange={dateChoose}
            allowClear={false}
          />
        </div>

        <Table dataSource={data}>
          <Column
            title="票种类型"
            dataIndex="category"
            key="category"
            align="center"
          />
          <Column title="售价" dataIndex="price" key="price" align="center" />
          <Column title="余票" dataIndex="stock" key="stock" align="center" />
          <Column
            title="购买数量"
            dataIndex="number"
            key="number"
            align="center"
          />
        </Table>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={buyTicket}>去购票</Button>
        </div>
      </div>
      <Ctripfooter />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    TicketData: state.ticket,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ticketFn: bindActionCreators(ticketActionCreator, dispatch),
    orderFn: bindActionCreators(orderActionCreator, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Choose);
