import React from "react";
import { footerStyle } from "../config/userStyle";
import { Layout } from "antd";

const { Footer } = Layout;

//========================================页脚组件================================================
export default function Ctripfooter() {
  return (
    <Footer style={footerStyle}>
      <img
        src="../../../logo1.png"
        alt="logo"
        style={{ height: "3rem", width: "4rem", margin: "0.2rem auto" }}
      />
      本着为员工开拓丰富多彩的福利渠道。让企业福利更智慧，更有温度，让员工享受更高品质的福利内容与服务。
      <br />
      携程旅行 www.ctrip.com Copyright © 1999-2023 途游队伍版权所有
    </Footer>
  );
}
