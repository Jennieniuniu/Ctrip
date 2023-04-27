import React, { useState } from "react";
import { Tabs } from "antd";
import Ordershow from "./ordershow";

export default function Orderlist(props) {
  let { myInfo, orderInfo } = props.data;
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
