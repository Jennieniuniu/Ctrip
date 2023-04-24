import React from "react";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as ticketActionCreator } from "../pages/TravelHotel/ticketstore";
// 路由
import { useNavigate } from "react-router-dom";

//========================================游玩展示================================================
function Picshow(props) {
  let { location } = props.data;
  const navigate = useNavigate();

  // 游玩展示图片
  return location.map((item) => (
    <div
      style={{ display: "inline-block", width: "16rem", height: "16rem" }}
      key={item.name}
    >
      <img
        src={item.url}
        alt="图片"
        style={{ width: "15rem", height: "15rem", margin: "1rem" }}
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
export default connect(mapStateToProps, mapDispatchToProps)(Picshow);
