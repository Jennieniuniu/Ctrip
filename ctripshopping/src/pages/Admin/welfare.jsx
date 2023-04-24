import React, { useEffect, useRef } from "react";
import * as eCharts from "echarts";
import { Table } from "antd";
import { birthFormat } from "../../utils/dateformat";
import { ticketKindStyle } from "../../config/userStyle";
export default function Welfare() {
  const eChartsRefRole = useRef();
  const eChartsRefSex = useRef();

  useEffect(() => {
    const myChartRole = eCharts.init(eChartsRefRole.current);
    const myChartSex = eCharts.init(eChartsRefSex.current);

    let optionRole = {
      color: ["	#FFD700"],
      width: ["1rem"],
      title: {
        text: "携程员工",
      },
      tooltip: {},
      legend: {
        data: ["人数"],
      },
      xAxis: {
        data: ["员工", "管理员"],
      },
      yAxis: {},
      series: [
        {
          name: "人数",
          type: "bar",
          data: [500, 100],
        },
      ],
    };
    let optionSex = {
      color: ["#b8f1ed", "#fe997b"],
      title: {
        text: "携程男女比例",
        left: "center",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },

      series: [
        {
          data: [
            { value: 1048, name: "男" },
            { value: 735, name: "女" },
          ],
          type: "pie",
        },
      ],
    };

    myChartRole.setOption(optionRole);
    myChartSex.setOption(optionSex);
  }, []); // 空数组必须写

  // 表格
  const columns = [
    {
      align: "center",
      title: "工号",
      dataIndex: "workid",
      sorter: (a, b) => a.workid - b.workid,
      sortDirections: ["descend"],
    },
    {
      align: "center",
      title: "角色",
      dataIndex: "role",
      filters: [
        {
          text: "管理员",
          value: "管理员",
        },
        {
          text: "员工",
          value: "员工",
        },
      ],
      onFilter: (value, record) => record.role.startsWith(value),
      filterSearch: true,
    },
    {
      align: "center",
      title: "性别",
      dataIndex: "sex",
      filters: [
        {
          text: "女",
          value: "女",
        },
        {
          text: "男",
          value: "男",
        },
      ],
      onFilter: (value, record) => record.sex.startsWith(value),
      filterSearch: true,
    },
    {
      align: "center",
      title: "生日",
      dataIndex: "birth",
      filters: [
        {
          text: "今日生日",
          value: birthFormat(new Date()),
        },
      ],
      onFilter: (value, record) => record.birth.startsWith(value),
      filterSearch: true,
    },
  ];
  let userAll = JSON.parse(localStorage.getItem("userAll"));
  userAll = userAll.map((item, index) => ({
    align: "center",
    key: index,
    workid: item.workid,
    role: item.role,
    sex: parseInt(item.cardid[16]) % 2 === 0 ? "女" : "男",
    birth: item.cardid.slice(-8, -4),
  }));

  const onChange = (extra) => {
    console.log("params", extra);
  };

  return (
    <>
      <div style={ticketKindStyle}>携程员工分布</div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          ref={eChartsRefRole}
          style={{
            width: "25rem",
            height: "15rem",
            margin: "1rem",
          }}
        ></div>

        <div
          ref={eChartsRefSex}
          style={{
            width: "15rem",
            height: "15rem",
            margin: "1rem",
          }}
        ></div>
      </div>
      <hr />
      <div style={ticketKindStyle}>员工信息</div>
      <Table columns={columns} dataSource={userAll} onChange={onChange} />
    </>
  );
}
