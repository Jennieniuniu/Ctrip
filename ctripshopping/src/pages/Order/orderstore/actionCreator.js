import axios from "../../../utils/request";
import * as actionTypes from "./actionTypes";

export const syncOrderAc = (orderStatus) => {
  return (dispatch) => {
    return axios.post("/api/order", orderStatus);
  };
};
export const myOrderAc = (workid) => {
  return (dispatch) => {
    return axios.post("/api/orderdetail", workid);
  };
};
export const chooseAc = (ticket) => {
  return {
    type: actionTypes.is_Choosed,
    payload: ticket,
  };
};

export const infoAc = (ticket, info) => {
  return {
    type: actionTypes.is_Info,
    payload: { ticket, info },
  };
};
export const payAc = (data) => {
  return {
    type: actionTypes.is_Payed,
    payload: data,
  };
};

export const cancelAc = (data) => {
  return {
    type: actionTypes.is_Payed,
    payload: data,
  };
};
