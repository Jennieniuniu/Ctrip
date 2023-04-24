import axios from "../../../utils/request";

export const getAc = (operate) => {
  return (dispatch) => {
    return axios.post("/api/ticket", operate);
  };
};

export const pricedatailAc = (selectlocation) => {
  return (dispatch) => {
    return axios.post("/api/ticketdetail", selectlocation);
  };
};

export const likeaddAc = (authorid) => {
  return (dispatch) => {
    return axios.post("/api/likeadd", authorid);
  };
};
