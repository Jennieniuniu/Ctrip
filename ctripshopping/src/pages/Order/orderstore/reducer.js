import * as actionTypes from "./actionTypes";
import isEmpty from "lodash/isEmpty";
const initState = {
  orderStatus: "",
  orderInfo: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.is_Choosed:
      return {
        orderStatus: "已选购门票",
        orderInfo: action.payload,
      };
    case actionTypes.is_Info:
      return {
        orderStatus: "已填写信息",
        orderInfo: action.payload,
      };
    case actionTypes.is_Payed:
      return {
        orderStatus: "已支付订单",
        orderInfo: action.payload,
      };
    default:
      return state;
  }
};
