import React, { useState } from "react";
import { Tabs } from "antd";
import Ordershow from "./ordershow";

export default function Orderlist(props) {
  let { myInfo, orderInfo } = props.data;
  // const [infoSelect, setInfoSelect] = useState(orderInfo);
  // const noPay = orderInfo.filter((item) => item.status === "未支付");
  // const alreadyPay = orderInfo.filter((item) => item.status === "已支付");
  // const orderSelect = (e) => {
  //   const select = e.target.innerText;
  //   switch (select) {
  //     case "全部订单":
  //       setInfoSelect(orderInfo);
  //       break;
  //     case "待付款":
  //       setInfoSelect(noPay);
  //       break;
  //     case "已支付":
  //       setInfoSelect(alreadyPay);

  //       break;
  //     default:
  //       setInfoSelect(orderInfo);
  //   }
  // };
  // console.log(infoSelect);
  const item = [
    {
      label: "全部订单",
      key: 11,
      children: <Ordershow data={props.data} />,
    },
    {
      label: "待付款",
      key: 12,
      // children: <Ordershow data={{ myInfo, infoSelect }} />,
    },
    {
      label: "已支付",
      key: 13,
      // children: <Ordershow data={{ myInfo, infoSelect }} />,
    },
  ];
  return <Tabs centered tabPosition={"top"} items={item} />;
}
