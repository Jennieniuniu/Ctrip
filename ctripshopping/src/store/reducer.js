import { combineReducers } from "redux";
import { reducer as loginReducer } from "../pages/LoginRegister/loginstore";
import { reducer as registerReducer } from "../pages/LoginRegister/registerstore";
import { reducer as orderReducer } from "../pages/Order/orderstore";
import { reducer as ticketReducer } from "../pages/TravelHotel/ticketstore";
import { reducer as adminReducer } from "../pages/Admin/adminstore";
// 组合所有的reducer

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  order: orderReducer,
  ticket: ticketReducer,
  admin: adminReducer,
});
