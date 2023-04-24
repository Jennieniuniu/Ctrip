import React from "react";
import { HeartFilled, StarFilled } from "@ant-design/icons";
import { ticketDivStyle } from "../config/userStyle";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as ticketActionCreator } from "../pages/TravelHotel/ticketstore";
// 路由
import { useNavigate } from "react-router-dom";

//========================================门票展示组件================================================
function Ticketshow(props) {
  const ticketlist = props.data;
  const { ticketFn } = props;
  const navigate = useNavigate();

  // 用选择的地点名去查询数据库对应的价格信息，使用原生的button，value nodeValue textContent
  const bookTicket = async (e) => {
    const ticketid = e.target.attributes[0].textContent;
    const selectInfo = ticketlist.find((item) => item.id == ticketid);
    const selectlocation = selectInfo.name;
    // 票价信息
    const { data } = await ticketFn.pricedatailAc({ selectlocation });
    const priceInfo = data;
    // 存储图片到本地
    localStorage.setItem("selectPictureurl", JSON.stringify(selectInfo.url));
    navigate("/user/travel/location/choose", {
      state: { selectInfo, priceInfo },
    });
  };
  return props.data.map((item) => (
    <div key={item.name} style={ticketDivStyle}>
      <div style={{ display: "flex" }}>
        <img
          src={item.url}
          alt="图片"
          style={{
            height: "10rem",
            width: "10rem",
            margin: "1rem",
            borderRadius: "2rem",
          }}
        />
        <div>
          <h2 style={{ color: "#000" }}>{item.name}</h2>
          <h3 style={{ color: "#000" }}>{item.description}</h3>
          <h3 style={{ color: "#000" }}>￥{item.price}</h3>
        </div>
      </div>

      <div>
        <div style={{ margin: "2rem" }}>
          <StarFilled style={{ color: "#FF9933", fontSize: "1.5rem" }} />
          {item.score}
        </div>
        <div style={{ margin: "2rem" }}>
          <HeartFilled style={{ color: "#CC3366", fontSize: "1.5rem" }} />
          {item.collect}
        </div>
        <button data={item.id} onClick={bookTicket}>
          立即预定
        </button>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Ticketshow);
