import React from "react";
import { Badge } from "antd";
// ==============================点赞排行===================================
export default function Thumb(props) {
  // const { thumbTop } = props.data;
  const thumbTop = JSON.parse(localStorage.getItem("pictureAll"));
  return thumbTop.map((item, index) => {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "35rem",
          height: "10rem",
          border: "2px solid #666666",
          borderRadius: "1rem",
          margin: "2rem",
          padding: "1rem",
        }}
      >
        <div>
          <h3 style={{ color: "#000" }}>
            Top{index + 1} {item.name}
          </h3>
          <h3 style={{ margin: "2rem" }}>拍摄主题{item.theme}</h3>
          <h3 style={{ margin: "2rem" }}>点赞数:{item.thumb}</h3>
        </div>

        <Badge count={item.thumb}>
          <img
            style={{
              width: "10rem",
              height: "10rem",
              border: "1px solid #666666",
              borderRadius: "1rem",
            }}
            src={item.url}
            alt={item.theme}
          />
        </Badge>
      </div>
    );
  });
}
