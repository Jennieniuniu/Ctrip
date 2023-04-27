import React from "react";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as ticketActionCreator } from "../pages/TravelHotel/ticketstore";
// 路由
import { useNavigate } from "react-router-dom";

function Linearcard(props) {
  let { location } = props.data;
  const navigate = useNavigate();

  return location.map((item) => (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        width: "16rem",
        height: "12rem",
        borderRadius: 20,
        transition: "transform 0.5s ease-out",
        overflow: "hidden",
      }}
      key={item.name}
    >
      <img
        src={item.url}
        alt="图片"
        style={{
          width: "14rem",
          height: "11rem",
          borderRadius: 20,
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = `scale(1.2,1.2)`;
        }}
        // 鼠标移出时，卡片恢复原位
        onMouseLeave={(e) => {
          e.target.style.transform = `scale(1,1)`;
        }}
        // 向下传递选择的地点
        onClick={async (e) => {
          const select = item.name;
          const kind = item.kind;
          const { data } = await props.ticketFn.getAc({ select, kind });
          navigate("/user/travel/location", {
            state: { data, kind, select },
          });
        }}
      />

      <h2
        style={{
          color: "#fff",
          position: "relative",
          top: "-5rem",
          left: "0rem",
          cursor: "pointer",
          fontSize: "25px",
          cursor: "default",
        }}
      >
        {item.name}
      </h2>
    </div>
  ));
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
export default connect(mapStateToProps, mapDispatchToProps)(Linearcard);
