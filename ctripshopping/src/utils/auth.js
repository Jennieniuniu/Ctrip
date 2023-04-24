// import React from "react";
// import { connect } from "react-redux";
// // 路由
// import { useNavigate } from "react-router-dom";

// export default function (Comp) {
//   function Auth(props) {
//     const navigate = useNavigate();
//     if (props.isAuth === false) {
//       navigate("/login");
//     }
//     return <Auth {...props} />;
//   }
//   const mapStateToProps = (state) => {
//     return {
//       isAuth: state.login.isAuth,
//     };
//   };
//   return connect(mapStateToProps, { })(Auth);
// }
