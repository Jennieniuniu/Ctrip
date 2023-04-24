import React, { useState } from "react";
import { Layout, Input, Select } from "antd";
import Ticketshow from "./ticketshow";
import { ticketStyle } from "../config/userStyle";
import {
  ShopTwoTone,
  DollarTwoTone,
  StarTwoTone,
  FireTwoTone,
} from "@ant-design/icons";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as ticketActionCreator } from "../pages/TravelHotel/ticketstore";
// 路由组件获取值（待改进）
import { useLocation } from "react-router-dom";
const { Search } = Input;
const { Content } = Layout;

// ===================================选择月份或主题对应的门票展示=================================
function Ticket(props) {
  // 用locationname去查询数据库
  const { ticketFn } = props;
  const selectdata = useLocation();
  const { data, kind, select } = selectdata.state;
  const dbname = kind;
  // 筛选框值变量
  const [priceValue, setpriceValue] = useState("价格");
  const [scoreValue, setscoreValue] = useState("评分");
  const [firstValue, setfirstValue] = useState("综合");
  // 更新页面
  const [ticketshow, setTicketshow] = useState(data);
  // 搜索框发送请求
  const onSearch = async (value) => {
    setpriceValue("价格");
    setscoreValue("评分");
    setfirstValue("综合");
    const operate = "search";
    const values = { value, operate, dbname, select };
    const { data } = await ticketFn.getAc(values);
    setTicketshow(data);
  };
  // 价格排序
  const priceRank = async (value) => {
    if (value === "priceAscend") {
      setpriceValue("实惠");
    } else {
      setpriceValue("高价");
    }
    setscoreValue("评分");
    setfirstValue("综合");
    const operate = "priceRank";
    const values = { value, operate, dbname, select };
    const { data } = await ticketFn.getAc(values);
    setTicketshow(data);
  };
  // 评分排序
  const scoreRank = async (value) => {
    if (value === "scoreAscend") {
      setscoreValue("低分");
    } else {
      setscoreValue("高分");
    }
    setpriceValue("价格");
    setfirstValue("综合");
    const operate = "scoreRank";
    const values = { value, operate, dbname, select };
    const { data } = await ticketFn.getAc(values);
    setTicketshow(data);
  };
  // 综合排序
  const firstRank = async (value) => {
    if (value === "priceFirst") {
      setfirstValue("价格优先");
    } else {
      setfirstValue("评分优先");
    }
    setpriceValue("价格");
    setscoreValue("评分");
    const operate = "firstRank";
    const values = { value, operate, dbname, select };
    const { data } = await ticketFn.getAc(values);
    setTicketshow(data);
  };

  return (
    <>
      <Content style={ticketStyle}>
        <div
          style={{ paddingBottom: "2rem", borderBottom: "2px solid #CCCCCC" }}
        >
          <h1>门票预订</h1>
          <ShopTwoTone
            twoToneColor="#FF6600"
            style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}
          />
          <Search
            style={{
              width: "12rem",
              margin: "0 1rem",
            }}
            placeholder="搜索游玩地点"
            allowClear
            onSearch={onSearch}
          />
          <DollarTwoTone
            twoToneColor="#FF6600"
            style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}
          />
          <Select
            defaultValue="价格"
            value={priceValue}
            style={{
              width: "5rem",
              margin: "0 1rem ",
            }}
            onChange={priceRank}
            options={[
              {
                value: "priceAscend",
                label: "实惠",
              },
              {
                value: "priceDescend",
                label: "高价",
              },
            ]}
          />
          <StarTwoTone
            twoToneColor="#FF6600"
            style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}
          />
          <Select
            defaultValue="评分"
            value={scoreValue}
            style={{
              width: "5rem",
              margin: "0 1rem",
            }}
            onChange={scoreRank}
            options={[
              {
                value: "scoreAscend",
                label: "低分",
              },
              {
                value: "scoreDescend",
                label: "高分",
              },
            ]}
          />
          <FireTwoTone
            twoToneColor="#FF6600"
            style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}
          />
          <Select
            defaultValue="综合"
            value={firstValue}
            style={{
              width: "7rem",
              margin: "0 1rem",
            }}
            onChange={firstRank}
            options={[
              {
                value: "priceFirst",
                label: "价格优先",
              },
              {
                value: "scoreFirst",
                label: "评分优先",
              },
            ]}
          />
        </div>
        {/* 地点门票展示 */}
        <Ticketshow data={ticketshow} />
      </Content>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
