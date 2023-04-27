import React from "react";
import ReactDOM from "react-dom/client";

import { ConfigProvider } from "antd";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/LoginRegister/home";
import Travel from "./pages/TravelHotel/travel";
import Travellist from "./pages/TravelHotel/travellist";
import Hotel from "./pages/TravelHotel/hotel";
import Choose from "./pages/Order/choose";
import Information from "./pages/Order/information";
import Pay from "./pages/Order/pay";
import Ordersuccess from "./pages/Order/ordersuccess";
import Order from "./pages/My/order";
import Admin from "./pages/Admin/admin";
import Robort from "./components/robort";
// redux
import { Provider } from "react-redux";
import store from "./store";

// 解析TOKEN并同步到Redux中
import decode from "jwt-decode";
import { syncInfoAc } from "./pages/LoginRegister/loginstore/actionCreator";

import jwt_decode from "jwt-decode";

// 检查本地存储中是否存在有效的token，并检查该token是否已过期，如果都符合要求，则认为用户已通过身份验证
function isAuthenticated() {
  const token = localStorage.getItem("@#@TOKEN");
  if (!token) {
    return false;
  }
  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
}
// 检查本地存储中是否存在有效的token，并检查该token是否已过期，如果都符合要求，则认为用户已通过身份验证
function isAdministor() {
  const token = localStorage.getItem("@#@TOKEN");
  if (!token || decode(tk).role !== "管理员") {
    return false;
  }
  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
}

// 路由保护 必须/login才可以/user和/user/login
const ProtectedUserRoute = ({ children }) => {
  const isAuthenticatedUser = isAuthenticated();
  const tk = localStorage.getItem("@#@TOKEN");

  if (!isAuthenticatedUser || !tk) {
    return <Navigate to="/login" />;
  }

  return children;
};
// 路由保护 必须/login才可以/user和/user/login
const ProtectedAdminRoute = ({ children }) => {
  const isAdministorUser = isAdministor();
  const tk = localStorage.getItem("@#@TOKEN");

  if (!isAdministorUser || !tk) {
    return <Navigate to="/login" />;
  }

  return children;
};

const tk = localStorage.getItem("@#@TOKEN");
if (tk) {
  store.dispatch(syncInfoAc(decode(tk)));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider theme={{ token: { colorPrimary: "#66CCFF" } }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route
            path="/user"
            element={
              <ProtectedUserRoute>
                <Travel />
              </ProtectedUserRoute>
            }
          />
          <Route path="/*" element={<Navigate to="/login" />} />
          <Route
            path="/user/travel/location"
            element={
              <ProtectedUserRoute>
                <Travellist />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/user/travel/location/choose"
            element={
              <ProtectedUserRoute>
                <Choose />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/user/travel/location/information"
            element={
              <ProtectedUserRoute>
                <Information />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/user/travel/location/pay"
            element={
              <ProtectedUserRoute>
                <Pay />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/user/travel/location/success"
            element={
              <ProtectedUserRoute>
                <Ordersuccess />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/user/hotel"
            element={
              <ProtectedUserRoute>
                <Hotel />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/user/robot"
            element={
              <ProtectedUserRoute>
                <Robort />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/user/my"
            element={
              <ProtectedUserRoute>
                <Order />
              </ProtectedUserRoute>
            }
          />
          {/* 管理员 */}
          <Route
            path="/admin/*"
            element={
              <ProtectedAdminRoute>
                <Admin />
              </ProtectedAdminRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
  // </React.StrictMode>
);
