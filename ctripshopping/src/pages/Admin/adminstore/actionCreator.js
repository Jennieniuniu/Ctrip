import axios from "../../../utils/request";

export const adminAc = (data) => {
  return (dispatch) => {
    return axios.post("/api/information", data);
  };
};
export const orderAc = (data) => {
  return (dispatch) => {
    return axios.post("/api/adminorder", data);
  };
};
export const pictureAc = (data) => {
  return (dispatch) => {
    return axios.post("/api/picture", data);
  };
};
export const logout = (data) => {
  return (dispatch) => {
    localStorage.removeItem("@#@TOKEN");
  };
};
