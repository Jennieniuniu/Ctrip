// ---------------------------------登陆页----------------------------------
// 布局头部内容尾部格式
const loginHeaderStyle = {
  height: "6rem",
  padding: "0",
  color: "#636161",
  backgroundColor: "#F5F5F5",
  borderBottom: "1px solid #808080",
  display: "flex",
  justifyContent: "space-between",
};
const loginContentStyle = {
  height: "23rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundSize: "100% 100%",
  backgroundImage:
    "url(https://img.js.design/assets/img/6430fd96aebb4a605eb4b7cc.jpg#e40e8a12d3f29e97785d5a965815fef7) ",
};
const loginContentBoxStyle = {
  padding: "1rem 1rem",
  backgroundColor: "#F5F5F5",
  border: "1px solid 	#D3D3D3",
  borderRadius: "5%",
};

// ---------------------------------用户首页--------------------------------
// 头部
const headerStyle = {
  height: "6rem",
  padding: "0",
  backgroundColor: "#808080",
  borderRadius: "1rem",
  display: "flex",
  justifyContent: "space-between",
};
// 页脚
const footerStyle = {
  height: "6.5rem",
  padding: "0.5rem 1rem",
  textAlign: "center",
  fontSize: "15px",
  color: "#F5F5F5",
  backgroundColor: "#808080",
  display: "flex",
  flexDirection: "column",
};
const photoStyle = {
  margin: "5rem  2rem 2rem 12rem",
  width: "60rem",
  height: "25rem",
  background: "#FFCC66",
};

const showStyle = {
  textAlign: "center",
  margin: "5rem  2rem 2rem 12rem",
  width: "60rem",
  border: "3px solid #000",
  borderRadius: "1rem",
};
// ----------------------------------导航栏布局----------------------------------
const navLayoutStyle = {
  width: "78rem",
  position: "sticky",
  top: "0rem",
  zIndex: "20",
};
// 导航栏
const navMenuStyle = {
  height: "5rem ",
  minWidth: "40rem",
  margin: "1rem 2rem",
  color: "#F5F5F5",
  backgroundColor: "#808080",
  fontSize: "20px",
  borderRadius: "5rem",
};
// --------------------------------------侧边栏------------------------------------
const sideSelectDivStyle = {
  width: "10rem",
  position: "fixed",
  bottom: "10rem",
  left: "0.5rem",
  zIndex: "21",
};
// 侧边栏菜单
const sideSelectMenuStyle = {
  minHeight: "17rem",
  padding: "3rem 1rem 1rem 0 ",
  borderRadius: "5rem",
  borderRight: "5px solid #FF9900",
  fontSize: "20px",
  fontWeight: "bold",
  backgroundColor: "#FFCC66",
};
// -------------------------------------门票展示----------------------------------------
const ticketDivStyle = {
  display: "flex",
  justifyContent: "space-between",
  border: "2px solid #666666",
  borderRadius: "1rem",
  margin: "2rem",
};
const ticketStyle = {
  margin: "5rem auto 2rem",
  padding: "2rem",
  width: "50rem",
  border: "3px solid 	#666666",
  borderRadius: "2rem",
};
// -------------------------------------选票----------------------------------------
const outerDivStyle = {
  width: "50rem",
  padding: "3rem 1rem 3rem 5rem",
  margin: "0 0rem 0 3rem",
};
const ticketOuterDivDStyle = {
  width: "43rem",
  display: "flex",
  justifyContent: "space-between",
  border: "3px solid #CCCCCC",
  borderRadius: "1rem",
  padding: "1rem ",
  margin: "2rem",
};
const imgTicketStyle = {
  height: "10rem",
  margin: "1rem",
  borderRadius: "2rem",
};
const iconStyle = {
  color: "#FF9933",
  fontSize: "1.5rem",
  margin: "0 1rem 0 0",
};
const formOuterStyle = {
  flexFlow: "row wrap",
  width: "50rem",
  borderTop: "1px solid #CCC",
  padding: "1rem 0rem ",
  margin: "0rem",
};
const formStyle = {
  width: "40rem",
  padding: "0 3rem",
  margin: "0rem 4rem",
  borderRadius: "1rem",
};
const ticketInfoStyle = {
  border: "3px solid #CCC",
  margin: "1rem 3rem",
  padding: "1rem 1rem",
  borderRadius: "1rem",
  backgroundColor: "#87CEEB",
};
const ticketKindStyle = {
  textAlign: "center",
  width: "10rem",
  padding: "0 0.5rem",
  margin: "0 0 1rem 0.5rem",
  borderRadius: "5rem",
  border: "2px solid #FF9900",
  fontSize: "20px",
  fontWeight: "bold",
  backgroundColor: "#FFCC66",
};
// -----------------------------------我的订单-------------------------------
// 按钮 红 绿 蓝
const redBtn = {
  width: "5rem",
  margin: "0.1rem",
  background: "	#FF6347",
  borderRadius: "1rem",
};
const yellowBtn = {
  width: "5rem",
  margin: "0.1rem",
  background: "#FFFF00",
  borderRadius: "1rem",
};
const greenBtn = {
  width: "5rem",
  margin: "0 1.2rem",
  background: "	#00FA9A",
  borderRadius: "1rem",
};

export {
  loginHeaderStyle,
  loginContentStyle,
  loginContentBoxStyle,
  headerStyle,
  footerStyle,
  photoStyle,
  showStyle,
  navLayoutStyle,
  navMenuStyle,
  sideSelectDivStyle,
  sideSelectMenuStyle,
  ticketDivStyle,
  ticketStyle,
  outerDivStyle,
  ticketOuterDivDStyle,
  imgTicketStyle,
  iconStyle,
  formOuterStyle,
  formStyle,
  ticketInfoStyle,
  ticketKindStyle,
  redBtn,
  yellowBtn,
  greenBtn,
};
