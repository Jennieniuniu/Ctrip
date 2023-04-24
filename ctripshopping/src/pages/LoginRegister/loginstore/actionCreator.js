import axios from "../../../utils/request";
import * as actionTypes from "./actionTypes";

export const loginAc = (data) => {
  return (dispatch) => {
    return axios.post("/api/login", data);
  };
};

export const syncInfoAc = (data) => {
  return {
    type: actionTypes.SYNC_STATE_INFO,
    payload: data,
  };
};

export const logout = (role) => {
  // if (role === "员工") {
  return (dispatch) => {
    localStorage.removeItem("@#@TOKEN");
    localStorage.removeItem("localBalance");
    localStorage.removeItem("localCoupon");
    localStorage.removeItem("selectKey");
    localStorage.removeItem("userAll");
    localStorage.removeItem("orderAll");
    localStorage.removeItem("pictureAll");
  };
};
